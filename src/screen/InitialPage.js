import React, { useEffect } from "react";
import HomePage from "../components/HomePage";
import Jumbotron from "../components/Jumbotron";
import { useSelector } from "react-redux";
import { listNews } from "../actions/newsActions";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";
import AlertTab from "../components/AlertTab";
const InitialPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listNews());
  }, [dispatch]);

  const allNews = useSelector((state) => state.news);
  const { error, news, loading } = allNews;
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <AlertTab>{error}</AlertTab>
      ) : (
        <div>
          <HomePage>
            {news.map((each) => (
              <Jumbotron id={each.id} title={each.title} content={each.description} />
            ))}
          </HomePage>
          ;
        </div>
      )}
    </>
  );
};

export default InitialPage;
