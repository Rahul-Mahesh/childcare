// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq6V3cGRHLBeadCDLDO65ZaD_wLrgAVP8",
  authDomain: "childcare-814b2.firebaseapp.com",
  projectId: "childcare-814b2",
  storageBucket: "childcare-814b2.appspot.com",
  messagingSenderId: "144081069590",
  appId: "1:144081069590:web:b090b84df0c99e87b73737"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0)
{app = firebase.initializeApp(firebaseConfig);
}
else
{app = firebase.app()
}

const auth = firebase.auth()

export{ auth };