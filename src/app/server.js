const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const FirebaseStore = require('connect-session-firebase')(session)
const next = require('next')
const admin = require('firebase-admin')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const firebase = admin.initializeApp({
  credential: admin.credential.cert(
    require('./.config/serverFirebaseKey.json'),
  ),
  databaseURL: 'https://covailnt-a08da.firebaseio.com/',
})

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.use(
    session({
      store: new FirebaseStore({
        database: firebase.database(),
      }),
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      rolling: true,
      httpOnly: true,
      cookie: { maxAge: 604800000 }, // week
    }),
  )

  // The function below can be used if we ever need to compute db data in getInitialProps
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

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
