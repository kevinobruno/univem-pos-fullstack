import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyD1QBd6xfzPUCvsTc6a2a17DTbiD-VKrFg',
  authDomain: 'univem-react-native.firebaseapp.com',
  projectId: 'univem-react-native',
  storageBucket: 'univem-react-native.appspot.com',
  messagingSenderId: '305925043785',
  appId: '1:305925043785:web:2ea4935dba7af91a3b3198',
  measurementId: 'G-JHJV5XHNK3',
};

initializeApp(config);
const firestore = getFirestore();

export { firestore };
