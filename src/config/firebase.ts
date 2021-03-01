import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: 'AIzaSyBsUht9CZgsYjf7oyaKLAqk3RYflUeYWxY',
    authDomain: 'slack-clone-fbffa.firebaseapp.com',
    projectId: 'slack-clone-fbffa',
    storageBucket: 'slack-clone-fbffa.appspot.com',
    messagingSenderId: '733407806570',
    appId: '1:733407806570:web:24ffb391d821ef2bedf613',
};

const firebaseApp: any = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebaseApp;
