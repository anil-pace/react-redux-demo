import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ThemeConsumer } from 'styled-components';

const useStyles = makeStyles((theme)=>({
  root: {
  //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
   background: theme.bgColor,
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: theme.color,
    height: 48,
    padding: '0 30px',
    margin: '0.5rem'
  },
}));

export default function Hook_1() {
  const classes = useStyles();
  return <Button 
            className={classes.root}>
                Styling using makeStyles
        </Button>;
}


