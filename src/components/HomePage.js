import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginLeft: '2vw',
    marginTop: '2vh',
    marginBottom: '5vh',
    flexWrap: 'wrap',
  },
});

const HomePage = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default HomePage;
