import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const CardTemplate = ({ children }) => {
  return (
    <div>
      <Card style={{ boxShadow: "10px 5px 5px grey", width: "65vh", marginBottom: "3vh", backgroundColor: "#E2DCDC" }}>
        <CardActionArea>
          <CardContent>{children}</CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CardTemplate;
