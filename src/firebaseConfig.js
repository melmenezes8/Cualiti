
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDyLd6Fn0TVkQzi8Jc_sgokZyFdohSPgf8",
  authDomain: "cualitigreenlife-ecommerce.firebaseapp.com",
  projectId: "cualitigreenlife-ecommerce",
  storageBucket: "cualitigreenlife-ecommerce.appspot.com",
  messagingSenderId: "817308679167",
  appId: "1:817308679167:web:afccaf51e885ebbb8a85ca"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)