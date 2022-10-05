import { collection, getDocs, query as fbQuery } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, firestore, collectionToJson } from "../lib/firebase";
import { Collection } from "../types/collection";

export default function Collections() {
  const [user] = useAuthState(auth);
  const [collections, setCollections] = useState<Collection[] | null>(null);

  const getUserCollections = async () => {
    if (user) {
      const collectionsRef = collection(
        firestore,
        "users",
        user?.uid,
        "collections",
      );
      const collectionsQuery = fbQuery(collectionsRef);
      const data = (await getDocs(collectionsQuery)).docs.map(collectionToJson);
      console.log(data);
      setCollections(data);
    }
  };

  useEffect(() => {
    if (user) {
      getUserCollections();
    }
  }, [user]);

  return (
    <>
      <h1 className="mt-5 mb-6 font-bold text-4xl">Collections Page</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <td className="w-1/2 py-3 font-medium text-gray-400">
              Collection name
            </td>
            <td className="py-3 font-medium text-gray-400">Last modified</td>
            <td className="py-3 font-medium text-gray-400">Created</td>
          </tr>
        </thead>
        <tbody>
          {collections?.map((value) => (
            <tr
              key={value.id}
              className="group hover:bg-gray-100 cursor-pointer"
            >
              <td>
                <Link
                  to={`${value.id}`}
                  className="group-hover:underline block group-hover:underline group-hover:underline-offset-[3px] py-3"
                >
                  {value.name}
                </Link>
              </td>
              <td>
                <Link to={`${value.id}`} className="block">
                  {value.updatedAt?.toDateString()}
                </Link>
              </td>
              <td>
                <Link to={`${value.id}`} className="block">
                  {value.createdAt?.toDateString()}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
