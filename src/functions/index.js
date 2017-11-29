const functions = require('firebase-functions')
const next = require('next')

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
// const FileStore = require('session-file-store')(session)
const admin = require('firebase-admin')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

const firebase = admin.initializeApp(functions.config().firebase)

const serverlessFunction = functions.https.onRequest((req, res) => {
  console.log('File: ====> ' + req.originalUrl) // log the page.js file that is being requested

  if (!req.path) {
    req.url = `/${req.url}` // prepend '/' to keep query params if any
  }

  return app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.use(
      session({
        secret: 'geheimnis',
        saveUninitialized: true,
        // store: new FileStore({ path: '/tmp/sessions', secret: 'geheimnis' }),
        resave: false,
        rolling: true,
        httpOnly: true,
        cookie: { maxAge: 604800000 }, // week
      }),
    )

    server.use((req, res, next) => {
      req.firebaseServer = firebase
      next()
    })

    server.post('/api/login', (req, res) => {
      if (!req.body) return res.sendStatus(400)

      const token = req.body.token

      firebase
        .auth()
        .verifyIdToken(token)
        .then(decodedToken => {
          req.session.decodedToken = decodedToken
          return decodedToken
        })
        .then(decodedToken => res.json({ status: true, decodedToken }))
        .catch(error => res.json({ error }))
    })

    server.post('/api/logout', (req, res) => {
      req.session.decodedToken = null
      res.json({ status: true })
    })

    server.use(cors({ origin: true }))

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
})

module.exports.next = serverlessFunction
