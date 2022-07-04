import { Timestamp } from "firebase/firestore";
import { getUserCollection, addDoc, getDocs } from "lib/firebase-web";

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { PrettyPrintJson } from "./utilComponents";

type Props = {
  email: string;
};

const TestFirebase = ({ email }: Props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      console.log("Fetching user data");
      const userCollectionRef = await getUserCollection(email, "store");
      const snapshot = await getDocs(userCollectionRef);

      const data = snapshot.docs.map((doc) => {
        return doc.data();
      });

      return setData(data);
    };

    fetchUserData();
  }, [email]);

  console.log(`testing to ${email}`);

  const clickHandler = async () => {
    const userCollectionRef = await getUserCollection(email, "store");
    if (userCollectionRef) {
      await addDoc(userCollectionRef, {
        user: email,
        time: new Date(),
      });
    }
  };

  const items = data.map((item) => {
    return (
      <li key={item.time.seconds}>
        {item.user} : {item.time.seconds}
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
