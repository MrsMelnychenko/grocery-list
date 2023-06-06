import React from "react";
import ListTile from "../components/ListTile";

import Header from "../components/Header";

const Home = () => {
  const DB_LISTS_TEST = [
    { id: 0, title: "My shopping list 1" },
    { id: 1, title: "My shopping list 2" },
    { id: 2, title: "My shopping list 3" },
  ];

  return (
    <>
      <Header isMainPage={true} />
      {DB_LISTS_TEST.map((el) => {
        return <ListTile title={el.title} />;
      })}
    </>
  );
};

export default Home;
