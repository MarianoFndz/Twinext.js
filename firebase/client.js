import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDitKLoYLDfzW9UyFPiVsdcrPDQgnT7A4g",
  authDomain: "twinextjs.firebaseapp.com",
  projectId: "twinextjs",
  storageBucket: "twinextjs.appspot.com",
  messagingSenderId: "305964128137",
  appId: "1:305964128137:web:66c687491673c609923358",
  measurementId: "G-13ER35MZMX",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase
    .auth()
    .signInWithPopup(githubProvider)
    .then(mapUserFromFirebaseAuthToUser)
}

function mapUserFromFirebaseAuthToUser(user) {
  if (!user) return null
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}
