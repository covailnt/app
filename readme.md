# Installation Instructions

> Make sure you have node 8.x installed

1. Clone the project
2. Run `npm i`
3. Then run `npm start`
4. In src/.config folder make sure there is a `dev.config.js` and a
   `prod.config.js` file that look like this:

```javascript
export default {
  apiKey: 'key',
  authDomain: 'covailnt-a08da.firebaseapp.com',
  databaseURL: 'https://covailnt-a08da.firebaseio.com/',
  projectId: 'covailnt-a08da',
  storageBucket: 'covailnt-a08da.appspot.com',
  messagingSenderId: 'id',
}
```

That's it! Now go party on `localhost:3000` !

![](https://media.giphy.com/media/fsULJFFGv8X3G/giphy.gif)

# Contribution Guidelines

* Please follow
  [elemental design patterns](https://github.com/embark-studio/elemental)
* Make sure you have `Node 8.x` installed
* Don't use **Yarn** (no need with **NPM v5** because it is just as fast and
  creates a lock file)
* Use an editor that has **eslint** and **editorConfig** installed and adhere to
  error messages as they arise
* Please send **PRs** rather than push directly to a branch

# Styling shorthands

* **m**: margin
* **mt**: margin-top
* **mr**: margin-right
* **mb**: margin-bottom
* **ml**: margin-left
* **mx**: margin-left and margin-right
* **my**: margin-top and margin-bottom
* **p**: padding
* **pt**: padding-top
* **pr**: padding-right
* **pb**: padding-bottom
* **pl**: padding-left
* **px**: padding-left and padding-right
* **py**: padding-top and padding-bottom
