import { db } from "./config";
import { getDocs, collection } from "firebase/firestore";

export const readData = async () => {
  const collectionRef = collection(db, "notes");
  const data = await getDocs(collectionRef);
  return data.docs.map((ele) => ({ ...ele.data(), id: ele.id }));
};
