import {Route, Switch} from 'react-router-dom'
import {UnSplashService} from '../services/UnSplashService'
import {LocalImgService} from '../services/LocalImgService'
import {FavoritesImgs} from '../pages/FavoriteImgs'
import {AllImgs} from '../pages/AllImgs'
import {Layout} from './Layout'
import {AddImg} from '../pages/AddImg'
import {DogOfDay} from '../pages/DogOfDay'

export function RouteHandler() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllImgs imgName={'dog'} apiQuery={UnSplashService.getN} />
        </Route>
        <Route path="/favorites">
          <FavoritesImgs />
        </Route>
        <Route path="/add">
          <AddImg />
        </Route>
        <Route path="/mine">
          <AllImgs imgName={'mydogs'} apiQuery={LocalImgService.readN} />
        </Route>
        <Route path="/dod">
          <DogOfDay />
        </Route>
      </Switch>
    </Layout>
  )
}
