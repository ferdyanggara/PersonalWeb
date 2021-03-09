import React from "react";
import { useParams } from "react-router-dom";
import dummyData from "../contents/dummy-data";
import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./Wrapper";
import { Typography } from "@material-ui/core";
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
  console.log("parameter", parameter);
  let content = dummyData.find((each) => each.id == parameter.id);
  return (
    <>
      <h1
        style={{
          marginLeft: "3vw",
          marginTop: "3vw",
        }}
      >
        {content.title}
      </h1>
      <Wrapper>
        <Wrapper>
          <img style={{ flexGrow: 1 }} src={content.image} className={classes.image} alt="" />
        </Wrapper>
        <Wrapper>
          <Typography
            style={{
              textAlign: "justify",
              marginTop: "1vw",
              paddingRight: "3vw",
            }}
          >
            {content.description.slice(0, 2000).concat("..")}
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
          {content.description.slice(2000)}
        </Typography>
      </Wrapper>
    </>
  );
};

export default DetailScreen;
