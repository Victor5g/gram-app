import { initializeApp, FirebaseApp } from "firebase/app";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getFirestore, Firestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence, Auth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyAXO1zhz_4vFlMKWfh_oKxlt7LMOLT__Sc",
  authDomain: "social-db-2e95c.firebaseapp.com",
  projectId: "social-db-2e95c",
  storageBucket: "social-db-2e95c.appspot.com",
  messagingSenderId: "364743032680",
  appId: "1:364743032680:web:757bb7fbfffbd694db20dd",
  measurementId: "G-C1Z6QL6FM5",
};

export const client: FirebaseApp = initializeApp(firebaseConfig);
export const auth:Auth = initializeAuth(client, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const storage: FirebaseStorage = getStorage(client);
export const db: Firestore = getFirestore(client);