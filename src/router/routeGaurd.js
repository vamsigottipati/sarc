const firebase = require("../firebaseConfig")

export default (to, from, next) => {
  firebase.auth.onAuthStateChanged(user => {
    if (!user) {
      next({
        path: 'login'
      })
    } else {
      next()
    }
  })
}