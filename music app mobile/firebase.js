/*
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVMNxOSlrjnDHfEtHcvWrPuSONZdMH1-M',
  authDomain: 'musicapp-2e3d1.firebaseapp.com',
  projectId: 'musicapp-2e3d1',
  storageBucket: 'musicapp-2e3d1.appspot.com',
  messagingSenderId: '168086499335',
  appId: '1:168086499335:web:f728f5d1f97453b49bbaa2',
  measurementId: 'G-GPB465CJW1'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function fetchdata(db) {
  const docsCol = collection(db, 'musicas');
  const docSnap = await getDocs(docsCol);
  const docsList = docSnap.docs.map(doc=>doc.data());
  return docsList
}


let musicas = await fetchdata(db);

let musicUrl = musicas[0].url

*/
//document.querySelector('#audio').src = musicUrl

