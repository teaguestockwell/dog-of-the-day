import { AllImgs } from '../pages/AllImgs'
import { getN } from '../services/UnSplash'
import CircularProgress from '@material-ui/core/CircularProgress';
import { FavoritesImgs } from '../pages/FavoriteImgs';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout'
import { AddImg } from '../pages/AddImg';

export function RouteHandler(){
  return(
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllImgs imgName={'dog'}  apiQuery={getN} loadingComponent={<CircularProgress/>}/>
        </Route>
        <Route path='/add'>
          <AddImg/>
        </Route>
        <Route path='/favorites'>
          <FavoritesImgs/>
        </Route>
      </Switch>
    </Layout>
  )
}