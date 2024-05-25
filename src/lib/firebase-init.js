// firebase-init.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set} from "firebase/database";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };

