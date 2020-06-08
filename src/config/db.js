import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.initializeApp({ projectId: process.env.VUE_APP_FIREBASE_ID }).firestore();

const { TimeStamp, GeoPoint } = firebase.firestore;
export { TimeStamp, GeoPoint };

db.settings({});
