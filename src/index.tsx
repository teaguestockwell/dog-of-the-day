import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {RouteHandler} from './layout/RouteHandler'
import {FavoritesContextProvider} from './store/FavoriteContext'
import {Helmet} from "react-helmet"
import { AnimalContextProvider } from './store/AnimalContext'

ReactDOM.render(
  <>
    <Helmet>
      <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    </Helmet>
    <FavoritesContextProvider>
      <AnimalContextProvider>
        <BrowserRouter>
          <RouteHandler />
        </BrowserRouter>
      </AnimalContextProvider>
    </FavoritesContextProvider>
  </>,
  document.getElementById('root')
)

