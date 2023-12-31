// Firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref as databaseRef, set as databaseSet } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB3q0SHX_ce4YqmE9rUK9V3DPlID56aQiE",
  authDomain: "facebook-975ea.firebaseapp.com",
  databaseURL: "https://facebook-975ea-default-rtdb.firebaseio.com",
  projectId: "facebook-975ea",
  storageBucket: "facebook-975ea.appspot.com",
  messagingSenderId: "313439570231",
  appId: "1:313439570231:web:755764af4f7c43636df2b2"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database as db, databaseRef as ref, databaseSet as set };

