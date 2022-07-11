import { Timestamp } from "firebase/firestore";
import {
  getUserCollection,
  addDoc,
  signInFirebase,
  db,
} from "lib/firebase-web";

import { doc, collection, getDocs } from "firebase/firestore";

import { getAuth, signInWithCustomToken } from "firebase/auth";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PrettyPrintJson } from "components/utilComponents";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

type Props = {
  email: string;
};

const TestFirebase = ({ email }: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const token = await fetch("/api/auth/token").then((res) => res.text());
      console.log(`Fetching user data with token ${token.slice(0, 20)}`);

      const userCredential = await signInWithCustomToken(auth, token).catch(
        (err) => {
          console.log(`couldnt sign in with custom token: ${err.errorMessage}`);
        }
      );

      const userCollectionRef = collection(
        db,
        `/user_store/${"fotoflo@gmail.com"}/debug_button_data/`
      );

      try {
        const snapshot = await getDocs(userCollectionRef);
        const data = snapshot.docs.map((doc) => {
          return doc.data();
        });
        return setData(data);
      } catch (error) {
        console.log("error writing to firebase: ", error.code);
      }
    };

    fetchUserData();
  }, [email]);

  console.log(`testing to ${email}`);

  const clickHandler = async () => {
    const userCollectionRef = await getUserCollection(
      email,
      "debug_button_data"
    );
    if (userCollectionRef) {
      await addDoc(userCollectionRef, {
        user: email,
        time: new Date(),
      });
    }
  };

  const items = data.map((item) => {
    return (
      <li key={item.time?.seconds}>
        {item.user} : {item.time?.seconds}
      </li>
    );
  });

  return (
    <>
      <Button onClick={clickHandler}>Write to firestore</Button>

      {<ul>{items}</ul>}
    </>
  );
};

export default TestFirebase;
