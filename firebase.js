import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyD0tjQMneJn2xEqrw03dhKXbFaUMwNDMjM",
 authDomain: "flashcard-b774b.firebaseapp.com",
 projectId: "flashcard-b774b",
 storageBucket: "flashcard-b774b.appspot.com",
 messagingSenderId: "873274508097",
 appId: "1:873274508097:web:18ccdc86b69a207e7997c0"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;