import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDuydO8d2ApAtAM4nOMmGspm8OebihWTBA",
    authDomain: "dragon-news-d7725.firebaseapp.com",
    projectId: "dragon-news-d7725",
    storageBucket: "dragon-news-d7725.appspot.com",
    messagingSenderId: "298344746921",
    appId: "1:298344746921:web:2f1f3024e4f560655ebeb8"
};

const app = initializeApp(firebaseConfig);

export default app;