import { useContext } from 'react';
import {FavoritesContext} from '../store/FavoriteContext';
import {ImgLazyGrid} from '../components/ImgLazyGrid';

export function FavoritesImgs() {
  const favoritesCtx = useContext(FavoritesContext);

  if (favoritesCtx.totalFavoritedImgs === 0) {
    return(
      <p>You have no favorites yet. Start adding some?</p>
    )
  } else {
    return(
      <ImgLazyGrid imgs={favoritesCtx.favoritedImgs} />
    )
  }
}