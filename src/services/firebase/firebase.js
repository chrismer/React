import {initializeApp} from 'firebase/app';
import {getFirestore} from '../../firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQYJ41S63nWY9j6A6_QWj4ViOSpbbh2Nk",
    authDomain: "react-course-ch.firebaseapp.com",
    projectId: "react-course-ch",
    storageBucket: "react-course-ch.appspot.com",
    messagingSenderId: "721934047656",
    appId: "1:721934047656:web:b8d1007517aae4a2ce659d"
  };

  const app  = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  