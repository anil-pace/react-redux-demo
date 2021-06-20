// Reference
// https://medium.com/swlh/building-your-first-web-page-with-react-and-material-ui-287461c5f58a
//


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from './Home/TopMenu';
import SideMenu from './Home/SideMenu';
import Footer from './Home/Footer';
import MainContent from './Home/MainContent';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenu />
      <SideMenu />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Home;