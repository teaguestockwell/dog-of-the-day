import { AllImgs } from '../pages/AllImgs'
import { UnSplashService } from '../services/UnSplash'
import { FavoritesImgs } from '../pages/FavoriteImgs';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout'
import { AddImg } from '../pages/AddImg';

export function RouteHandler(){
  return(
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllImgs imgName={'dog'}  apiQuery={UnSplashService.getN}/>
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