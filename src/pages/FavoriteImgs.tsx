import { useContext } from 'react';
import {FavoritesContext} from '../store/FavoriteContext';
import {ImgLazyGrid} from '../layout/ImgLazyGrid';

export function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  if (favoritesCtx.totalFavoritedImgs === 0) {
    return(
      <p>You got no favorites yet. Start adding some?</p>
    )
  } else {
    return(
      <ImgLazyGrid imgs={favoritesCtx.favoritedImgs} />
    )
  }
}