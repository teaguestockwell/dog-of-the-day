import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {RouteHandler} from './layout/RouteHandler'
import {FavoritesContextProvider} from './store/FavoriteContext'
import {Helmet} from "react-helmet"

ReactDOM.render(
  <>
    <Helmet>
      <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width"
    />
    </Helmet>
    <FavoritesContextProvider>
      <BrowserRouter>
        <RouteHandler />
      </BrowserRouter>
    </FavoritesContextProvider>
  </>,
  document.getElementById('root')
)

