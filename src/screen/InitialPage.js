import React from "react";
import HomePage from "../components/HomePage";
import Jumbotron from "../components/Jumbotron";
import { useSelector } from "react-redux";

const InitialPage = () => {
  const allData = useSelector((state) => state.news.news);
  return (
    <div>
      <HomePage>
        {allData.map((each) => (
          <Jumbotron id={each.id} title={each.title} content={each.description} />
        ))}
      </HomePage>
      ;
    </div>
  );
};

export default InitialPage;
