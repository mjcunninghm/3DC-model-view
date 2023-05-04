import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2iqmtQwMxAHcn3K8qr8569N7Shu6nauQ",
    authDomain: "ui-cardiopedia.firebaseapp.com",
    projectId: "ui-cardiopedia",
    storageBucket: "ui-cardiopedia.appspot.com",
    messagingSenderId: "401360266257",
    appId: "1:401360266257:web:38e2765b422d8fa28cbdb0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
