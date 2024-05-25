import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAnY66W59MekPkdZh-9ITvtwkH10HpknR0",
    authDomain: "notenetwork-a6612.firebaseapp.com",
    projectId: "notenetwork-a6612",
    storageBucket: "notenetwork-a6612.appspot.com",
    messagingSenderId: "1040582322716",
    appId: "1:1040582322716:web:459300910976f74b3e0dd9",
  };

  const app = initializeApp(firebaseConfig);

  function createClass(classCode, classNum) {

    const database = getDatabase();
    const reference = ref(db, 'classes/' + classEncoding);

    set(reference, { topicHeadings: [

    ] })

  }
  

