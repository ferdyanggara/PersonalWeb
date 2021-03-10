import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import dummyData from "../contents/dummy-data";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./Wrapper";
import { Typography } from "@material-ui/core";
import { listNewsDetail } from "../actions/newsActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import AlertTab from "../components/AlertTab";
const useStyles = makeStyles({
  image: {
    marginTop: "1vh",
    minWidth: 300,
    maxWidth: "45vw",
    height: "30vw",
    borderRadius: "30px",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    flex: "1",
  },
});
const DetailScreen = () => {
  const classes = useStyles();

  let parameter = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listNewsDetail(parameter.id));
  }, [dispatch]);
  const oneNews = useSelector((state) => state.newsDetail);

  if (oneNews.news != []) {
    const { loading, news, error } = oneNews;
    console.log("wtf is news", oneNews);
    return (
      <>
        {loading ? (
          <Loader />
        ) : error ? (
          <AlertTab>{error}</AlertTab>
        ) : (
          <div>
            <>
              <h1
                style={{
                  marginLeft: "3vw",
                  marginTop: "3vw",
                }}
              >
                {news != undefined && news.title}
              </h1>
              <Wrapper>
                <Wrapper>
                  <img style={{ flexGrow: 1 }} src={news.image} className={classes.image} alt="" />
                </Wrapper>
                <Wrapper>
                  <Typography
                    style={{
                      textAlign: "justify",
                      marginTop: "1vw",
                      paddingRight: "3vw",
                    }}
                  >
                    {news != undefined && news.description.slice(0, 2000).concat("..")}
                  </Typography>
                </Wrapper>
              </Wrapper>
              <Wrapper style={{ marginTop: "0px" }}>
                <Typography
                  style={{
                    textAlign: "justify",
                    paddingLeft: "15px",
                    paddingRight: "20px",
                  }}
                >
                  {news != undefined && news.description.slice(2000)}
                </Typography>
              </Wrapper>
            </>
            ;
          </div>
        )}
      </>
    );
  }
};

export default DetailScreen;
