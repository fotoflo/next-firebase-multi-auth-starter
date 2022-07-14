import { db } from "./firebase-server";
import { ADAPTER_COLLECTION_NAME } from "next.config";
import { findMany } from "next-auth-custom/utils";

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

export async function getCities() {
  const doc = await db.doc("cities/SF").get();
  return doc.data();
}

export async function getAllTokens(userId) {
  const q = db
    .collection(`${ADAPTER_COLLECTION_NAME}/auth_store/account`)
    .where("userId", "==", userId);

  const querySnap = await q.get();
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  querySnap.forEach((doc) => docs.push(doc.data()));

  return docs;
}
