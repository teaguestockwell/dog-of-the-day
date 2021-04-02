import {Route, Switch} from 'react-router-dom'
import {UnSplashService} from '../services/UnSplashService'
import {LocalImgService} from '../services/LocalImgService'
import {FavoritesImgs} from '../pages/FavoriteImgs'
import {AllImgs} from '../pages/AllImgs'
import {Layout} from './Layout'
import {AddImg} from '../pages/AddImg'
import {DogOfDay} from '../pages/DogOfDay'
import { useContext } from 'react'
import { AnimalContext } from '../store/AnimalContext'

export function RouteHandler() {
  const animalContext = useContext(AnimalContext)
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllImgs imgName={animalContext.animal} apiQuery={UnSplashService.getN} />
        </Route>
        <Route path="/favorites">
          <FavoritesImgs />
        </Route>
        <Route path="/add">
          <AddImg />
        </Route>
        <Route path="/mine">
          <AllImgs imgName={'favorites'} apiQuery={LocalImgService.readN} />
        </Route>
        <Route path="/random">
          <DogOfDay />
        </Route>
      </Switch>
    </Layout>
  )
}
