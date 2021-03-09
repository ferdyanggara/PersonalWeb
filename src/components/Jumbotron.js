import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import { useDispatch } from "react-redux";
import { deleteNews } from "../store/actions/newsActions";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: "45%",
    height: "32vw",
    borderRadius: "30px",
    marginLeft: "2.3vw",
    marginTop: "2vh",
  },
  postDelete: {
    display: "flex",
    flexDirection: "row",
  },
});

const Jumbotron = ({ id, title, content }) => {
  const classes = useStyles();
  let history = useHistory();

  const dispatch = useDispatch();

  const goToDetails = () => {
    history.push(`/details/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMediaStyle}
          component="img"
          alt="Contemplative Reptile"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/After_Storm_%284K_Resolution%29.webm/4096px--After_Storm_%284K_Resolution%29.webm.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className={classes.postDelete}>
            <Typography gutterBottom variant="h5" component="h2">
              #{id} {title}
            </Typography>
            <Button
              style={{ paddingBottom: "1vh", width: "1em" }}
              onClick={() => {
                dispatch(deleteNews(id));
              }}
            >
              <DeleteOutlinedIcon style={{ ...classes.icon, width: "1em" }} color="error" />
            </Button>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {content.slice(0, 100).concat("...")}
          </Typography>
          <Button onClick={goToDetails}>See more ></Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Jumbotron;
