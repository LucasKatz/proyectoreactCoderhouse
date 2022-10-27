import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCeKQRc_NC8O7yqyfxvBDnQ0rbqunRyPTo",
    authDomain: "proyectoreactcoderhouse-84537.firebaseapp.com",
    projectId: "proyectoreactcoderhouse-84537",
    storageBucket: "proyectoreactcoderhouse-84537.appspot.com",
    messagingSenderId: "623781412816",
    appId: "1:623781412816:web:cfb366020840c8ec8b03d5"
};


const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)