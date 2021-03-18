import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
 

export function TabBar() {
  return (
    <>
      <AppBar position='fixed'>
        <Tabs>
          <Tab label="All Dogs" component={Link} to='/'/>
          <Tab label="Add Dog" component={Link} to='/add'/>
          <Tab label="Favorite Dogs" component={Link} to='/favorites'/>
        </Tabs>
      </AppBar>
    </>
  );
}