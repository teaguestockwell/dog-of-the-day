
import { createContext, useState } from 'react';
import { UnplashImg } from '../services/unsplash'

interface IFavoriteContext{
  favoritedImgs: UnplashImg[]
  totalFavoritedImgs: number,
  addFavoriteImg: (x: UnplashImg) => void,
  removeFavoriteImg: (pictureId: string) => void,
  isFavoritedImg: (pictureId: string) => boolean,
}

export const FavoritesContext = createContext<IFavoriteContext>({
  favoritedImgs: [],
  totalFavoritedImgs: 0,
  addFavoriteImg: () => {},
  removeFavoriteImg: () => {},
  isFavoritedImg: () => false,
});

export function FavoritesContextProvider(props: React.PropsWithChildren<{}>) {
  const [favorites, setFavorites] = useState<UnplashImg[]>([]);

  function addFavoriteHandler(newFavorite: UnplashImg):void {
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(newFavorite);
    });
  }

  function removeFavoriteHandler(unplashImgId: string):void {
    setFavorites(prevFavorites => {
      return prevFavorites.filter(img => img.id !== unplashImgId);
    });
  }

  function isFavoriteHandler(unplashImgId: string):boolean {
    return favorites.some(img => img.id === unplashImgId);
  }

  const context: IFavoriteContext  = {
    favoritedImgs: favorites,
    totalFavoritedImgs: favorites.length,
    addFavoriteImg: addFavoriteHandler,
    removeFavoriteImg: removeFavoriteHandler,
    isFavoritedImg: isFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}