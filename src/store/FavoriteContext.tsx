
import { createContext, useState } from 'react';
import { UnSplashImg } from '../services/UnSplash'

interface IFavoriteContext{
  favoritedImgs: UnSplashImg[]
  totalFavoritedImgs: number,
  addFavoriteImg: (x: UnSplashImg) => void,
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
  const [favorites, setFavorites] = useState<UnSplashImg[]>([]);

  function addFavoriteHandler(newFavorite: UnSplashImg):void {
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(newFavorite);
    });
  }

  function removeFavoriteHandler(UnSplashImgId: string):void {
    setFavorites(prevFavorites => {
      return prevFavorites.filter(img => img.id !== UnSplashImgId);
    });
  }

  function isFavoriteHandler(UnSplashImgId: string):boolean {
    return favorites.some(img => img.id === UnSplashImgId);
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