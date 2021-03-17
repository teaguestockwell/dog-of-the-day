export {}
// import { createContext, ReactNode, useState } from 'react';
// import { Author as PictureResult } from '../components/CustomCard'

// export interface FavoriteContextInterface {
//   favoritedPictures: PictureResult[]
//   totalFavoritedPictures: number,
//   addFavoritePicture: (x: PictureResult) => PictureResult[],
//   removeFavoritePicture: (pictureId: string) => PictureResult[],
//   pictureIsFavorite: (pictureId: string) => boolean,
// }

// const FavoritesContext = createContext<FavoriteContextInterface | null>(null);

// export function FavoritesContextProvider({children}: {children: ReactNode}) {
//   const [userFavorites, setUserFavorites] = useState<PictureResult[]>([]);

//   function addFavoriteHandler(favoriteMeetup: PictureResult) {
//     setUserFavorites((prevUserFavorites) => {
//       return prevUserFavorites.concat(favoriteMeetup);
//     });
//   }

//   function removeFavoriteHandler(pictureResultId: string) {
//     setUserFavorites(prevUserFavorites => {
//       return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
//     });
//   }

//   function itemIsFavoriteHandler(meetupId: string) {
//     return userFavorites.some(meetup => meetup.id === meetupId);
//   }

//   const context = {
//     favorites: userFavorites,
//     totalFavorites: userFavorites.length,
//     addFavorite: addFavoriteHandler,
//     removeFavorite: removeFavoriteHandler,
//     itemIsFavorite: itemIsFavoriteHandler
//   };

//   return (
//     <FavoritesContext.Provider value={context}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// }