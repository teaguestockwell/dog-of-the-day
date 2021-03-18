import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {TabBar} from './layout/TabBar'
import { FavoritesContextProvider } from './store/FavoriteContext'

ReactDOM.render(
    <FavoritesContextProvider>
    <BrowserRouter>
      <TabBar />
      </BrowserRouter>
    </FavoritesContextProvider>
  ,document.getElementById('root')
)
