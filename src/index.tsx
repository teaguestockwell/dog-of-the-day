import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {RouteHandler} from './layout/RouteHandler'
import {FavoritesContextProvider} from './store/FavoriteContext'

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById('root')
)
