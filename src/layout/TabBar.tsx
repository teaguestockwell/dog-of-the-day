import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { useState } from 'react';
 
function getAppBarIndex():number {
  switch (window.location.pathname) {
    case '/': return 0
    case '/add': return 1
    case '/favorites':return 2
    default: return 0
  }
}

export function TabBar() {
  const [tabIndex,setTabIndex] = useState(0)
  
  function onTabClick(){setTabIndex(getAppBarIndex())}

  return (
    <>
      <AppBar position='fixed' onClick={onTabClick}>
        <Tabs value={tabIndex}>
          <Tab label="All Dogs" component={Link} to='/'/>
          <Tab label="Add Dog" component={Link} to='/add'/>
          <Tab label="Favorite Dogs" component={Link} to='/favorites'/>
        </Tabs>
      </AppBar>
    </>
  );
}