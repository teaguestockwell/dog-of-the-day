import lf from 'localforage'

export const FavoriteImgsStore = lf.createInstance({
  name: 'favorite-imgs-store'
})

export const LocalImgsStore = lf.createInstance({
  name: 'local-imgs-store'
})