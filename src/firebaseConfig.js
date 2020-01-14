import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDvStLDFViYSqC8r7TuogcS8lTC18HCLOI",
    authDomain: "sarc-bphc.firebaseapp.com",
    databaseURL: "https://sarc-bphc.firebaseio.com",
    projectId: "sarc-bphc",
    storageBucket: "sarc-bphc.appspot.com",
    messagingSenderId: "851537766528",
    appId: "1:851537766528:web:5d10d3ee2e691772ec1e65",
    measurementId: "G-TDYK56C5SV"
  };

firebase.initializeApp(firebaseConfig)
const rtdb = firebase.database()
const auth = firebase.auth()

export {
    auth,
    rtdb
  }