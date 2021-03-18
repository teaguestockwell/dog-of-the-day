import {UnSplashImg} from "./UnSplashService"
import { FavoriteImgsStore } from './LocalForage'

function timeout<T>(promise:Promise<T>):Promise<T> {
  return Promise.race<Promise<T>>([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 11.5e3))
  ])
}

export const LocalFavoriteService = {
  put1: async (img:UnSplashImg):Promise<boolean> => {
    try{
      await timeout(FavoriteImgsStore.setItem(img.id,img))
    }catch(e){return false}
    return true
  },

  readN: async ():Promise<UnSplashImg[]> => {
    const imgs: UnSplashImg[] = []
    try{
      await timeout(
        FavoriteImgsStore.iterate((val,_key,_index)=>{
          imgs.push(val as UnSplashImg)
        })
      )
    } catch(e){console.log(e); return []}
    return imgs
  },

  read1: async (imgId:UnSplashImg["id"]):Promise<UnSplashImg | null> => {
    try{
      return await timeout(FavoriteImgsStore.getItem(imgId))
    } catch(e){return null}
  },

  delete1: async (imgId:string):Promise<boolean> => {
    try{
      await timeout(FavoriteImgsStore.removeItem(imgId))
    }catch(e){return false}
    return true;
  }
}