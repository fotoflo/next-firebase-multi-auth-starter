import { db } from "./firebase-server";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_appId,
};

export async function saveCities() {
  const citiesRef = db.collection("cities");

  await citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"],
  });

  return true;
}
