import React from "react";
import ListTile from "../components/ListTile";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { useCookies } from "react-cookie";

const Home = () => {
  const [cookies] = useCookies(["userEmail"]);
  const [dbLists, setDbLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const dbRef = ref(getDatabase());
        const snapshot = await get(
          child(dbRef, `Lists/${cookies.userEmail.replace(".", "-")}`)
        );
        if (snapshot.exists()) {
          const listsData = [];
          snapshot.forEach((childSnapshot) => {
            const listData = {
              id: childSnapshot.key,
              title: childSnapshot.val().name,
            };
            listsData.push(listData);
          });
          setDbLists(listsData);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLists();
  });

  return (
    <>
      <Header isMainPage={true} />
      {dbLists.map((el) => {
        return <ListTile key={el.id} id={el.id} title={el.title} />;
      })}
    </>
  );
};

export default Home;
