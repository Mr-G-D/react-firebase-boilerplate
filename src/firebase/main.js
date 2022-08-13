import { db } from "./config";
import {
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const readData = async (table) => {
  const collectionRef = collection(db, table);
  const data = await getDocs(collectionRef);
  return data.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
};

export const createData = async (table, data) => {
  const collectionRef = collection(db, table);
  await addDoc(collectionRef, data);
};

export const updateData = async (table, id, data) => {
  const newDoc = doc(db, table, id);
  await updateDoc(newDoc, data);
};

export const deleteData = async (table, id) => {
  const data = doc(db, table, id);
  await deleteDoc(data);
};
