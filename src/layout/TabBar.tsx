import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Badge from '@material-ui/core/Badge'
import { FavoritesContext } from '../store/FavoriteContext';
import { styled } from '@material-ui/core/styles';
 
function getAppBarIndex():number {
  switch (window.location.pathname) {
    case '/': return 0
    case '/favorites':return 1
    case '/add': return 2
    case '/mine':return 3
    case '/dod': return 4
    default: return 0
  }
}

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 23,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export function TabBar() {
  const [tabIndex,setTabIndex] = useState(0)
  const favoritesCtx = useContext(FavoritesContext);
  
  function onTabClick(){setTabIndex(getAppBarIndex())}

  return (
    <>
      <AppBar position='fixed' onClick={onTabClick}>
        <Tabs value={tabIndex}>
          <Tab label="All Dogs" component={Link} to='/'/>
          <StyledBadge badgeContent={favoritesCtx.totalFavoritedImgs}>
            <Tab label='Favorite Dogs' color="primary" component={Link} to='/favorites'/>
          </StyledBadge>
          <Tab label="Add Dog" component={Link} to='/add'/>
          <Tab label="My Dogs" component={Link} to='/mine'/>
          <Tab label="DoD" component={Link} to='/dod'/>
        </Tabs>
      </AppBar>
    </>
  );
}