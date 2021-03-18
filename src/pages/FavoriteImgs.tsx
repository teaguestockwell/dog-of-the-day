import { useContext } from 'react';
import {FavoritesContext} from '../store/FavoriteContext';
import {ImgLazyGrid} from '../components/ImgLazyGrid';

export function FavoritesImgs() {
  const favoritesCtx = useContext(FavoritesContext);

  if (favoritesCtx.totalFavoritedImgs === 0) {
    return(
      <h1>You have no favorites yet. Start adding some?</h1>
    )
  } else {
    return(
      <ImgLazyGrid imgs={favoritesCtx.favoritedImgs} />
    )
  }
}