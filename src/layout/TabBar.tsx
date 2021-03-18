import {ChangeEvent, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { AllImgs } from '../pages/AllImgs'
import { getN } from '../services/unsplash'
import CircularProgress from '@material-ui/core/CircularProgress';
import { FavoritesImgs } from '../pages/FavoriteImgs';
import { Link } from 'react-router-dom';
 

export function TabBar() {
  const [selectedTab,setSelectedTab] = useState(0)

  function handleChange(event: ChangeEvent<{}>, newValue: number){
    setSelectedTab(newValue);
  };

  return (
    <>
      <AppBar position="fixed">
        <Tabs value={selectedTab} onChange={handleChange}>
          <Tab label="All Dogs" component={Link} to='/all'/>
          <Tab label="Add Dog" component={Link} to='/add'/>
          <Tab label="Favorite Dog" component={Link} to='/favorite'/>
        </Tabs>
      </AppBar>
      {selectedTab === 0 && <AllImgs imgName={'dog'}  apiQuery={getN} loadingComponent={<CircularProgress/>}/>}
      {selectedTab === 1 && <h1>tab 2</h1>}
      {selectedTab === 1 && <FavoritesImgs/>}
    </>
  );
}