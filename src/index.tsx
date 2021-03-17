import React from 'react'
import ReactDOM from 'react-dom'
import TabBar from './pages/TabBar'
import { FavoritesContextProvider } from './store/FavoriteContext'

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <TabBar />
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
