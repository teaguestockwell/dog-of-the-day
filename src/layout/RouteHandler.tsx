import { AllImgs } from '../pages/AllImgs'
import { getN } from '../services/unsplash'
import CircularProgress from '@material-ui/core/CircularProgress';
import { FavoritesImgs } from '../pages/FavoriteImgs';
import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout'

export function RouteHandler(){
  return(
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllImgs imgName={'dog'}  apiQuery={getN} loadingComponent={<CircularProgress/>}/>
        </Route>
        <Route path='/add'>
          <h1>add</h1>
        </Route>
        <Route path='/favorites'>
          <FavoritesImgs/>
        </Route>
      </Switch>
    </Layout>
  )
}