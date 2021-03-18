import {ChangeEvent, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
 

export function TabBar() {
  const tabIdxEP = {
    '/':0,
    '/add':1,
    '/favorites':2
  }
  return (
    <>
      <AppBar position="fixed">
        <Tabs value={0}>
          <Link to='/'>
            <Tab label="All Dogs"/>
          </Link>
          <Link to='/add'>
            <Tab label="Add Dog"/>
          </Link>
          <Link to='/favorites'>
            <Tab label="Favorite Dogs"/>
          </Link>
        </Tabs>
      </AppBar>
    </>
  );
}