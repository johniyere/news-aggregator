import { initializeApp, getApps } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  limit,
  query as fbQuery,
  where,
  getDocs,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { Collection } from "../types/collection";

const firebaseConfig = {
  apiKey: "AIzaSyB2N4BaZFmk6GIfong2VHFkWogLajGB0q0",
  authDomain: "chickpea-c011d.firebaseapp.com",
  projectId: "chickpea-c011d",
  storageBucket: "chickpea-c011d.appspot.com",
  messagingSenderId: "125264224695",
  appId: "1:125264224695:web:51460ecd6f49b2b50c0832",
  measurementId: "G-4RY89MBCXE",
};

let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
}

export const firestore = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

/** `
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = collection(firestore, "users");
  const q = fbQuery(usersRef, where("username", "==", username), limit(1));
  const userDoc = (await getDocs(q)).docs[0];
  return userDoc;
}

export function collectionToJson(
  docData: QueryDocumentSnapshot<DocumentData>,
): Collection {
  const data = docData.data();
  return {
    ...data,
    id: docData.id,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: new Date(data.createdAt.toMillis()),
    updatedAt: new Date(data.updatedAt.toMillis()),
  };
}

export const { fromMillis } = Timestamp;
