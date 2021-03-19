import {createContext, useEffect, useState} from 'react'
import {UnSplashImg} from '../services/UnSplashService'
import {LocalFavoriteService} from '../services/LocalFavoriteService'

interface IFavoriteContext {
  favoritedImgs: UnSplashImg[]
  totalFavoritedImgs: number
  addFavoriteImg: (x: UnSplashImg) => void
  removeFavoriteImg: (pictureId: string) => void
  isFavoritedImg: (pictureId: string) => boolean
}

export const FavoritesContext = createContext<IFavoriteContext>({
  favoritedImgs: [],
  totalFavoritedImgs: 0,
  addFavoriteImg: () => {},
  removeFavoriteImg: () => {},
  isFavoritedImg: () => false,
})

export function FavoritesContextProvider(props: React.PropsWithChildren<{}>) {
  const [favorites, setFavorites] = useState<UnSplashImg[]>([])

  // init the local storage
  useEffect(() => {
    LocalFavoriteService.readN().then((localFavImgs) => {
      setFavorites(localFavImgs)
    })
  }, [])

  function addFavoriteHandler(newFavorite: UnSplashImg): void {
    LocalFavoriteService.put1(newFavorite)
    setFavorites((prevFavorites) => {
      return prevFavorites.concat(newFavorite)
    })
  }

  function removeFavoriteHandler(UnSplashImgId: string): void {
    LocalFavoriteService.delete1(UnSplashImgId)

    setFavorites((prevFavorites) => {
      return prevFavorites.filter((img) => img.id !== UnSplashImgId)
    })
  }

  function isFavoriteHandler(UnSplashImgId: string): boolean {
    return favorites.some((img) => img.id === UnSplashImgId)
  }

  const context: IFavoriteContext = {
    favoritedImgs: favorites,
    totalFavoritedImgs: favorites.length,
    addFavoriteImg: addFavoriteHandler,
    removeFavoriteImg: removeFavoriteHandler,
    isFavoritedImg: isFavoriteHandler,
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}
