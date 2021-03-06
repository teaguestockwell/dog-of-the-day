import {UnSplashImg} from './UnSplashService'
import {IAddFourm} from '../pages/AddImg'
import {v4} from 'uuid'
import {LocalImgsStore} from './LocalForage'

function timeout<T>(promise: Promise<T>): Promise<T> {
  return Promise.race<Promise<T>>([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), 11.5e3)
    ),
  ])
}

function createUnSplashImgFromPartial(partial: IAddFourm): UnSplashImg {
  return {
    id: v4(),
    authorName: partial.authorName,
    created: new Date().toISOString(),
    title: partial.title,
    altTitle: '',
    description: partial.description,
    alt_description: '',
    authorImgUrl: partial.authorImgUrl,
    imgUrl: partial.imgUrl,
    imgLink: partial.imgLink,
    likes: 0,
    authorBio: partial.authorBio,
    portfolio_url: partial.portfolio_url,
    downloadLink: partial.imgUrl,
  }
}

export const LocalImgService = {
  put1: async (imgPartial: IAddFourm): Promise<boolean> => {
    const img = createUnSplashImgFromPartial(imgPartial)
    try {
      await timeout(LocalImgsStore.setItem(img.id, img))
    } catch (e) {
      return false
    }
    return true
  },

  readN: async (_x: string): Promise<UnSplashImg[]> => {
    const imgs: UnSplashImg[] = []
    try {
      await timeout(
        LocalImgsStore.iterate((val, _key, _index) => {
          imgs.push(val as UnSplashImg)
        })
      )
    } catch (e) {
      return []
    }
    return imgs
  },

  read1: async (imgId: UnSplashImg['id']): Promise<UnSplashImg | null> => {
    try {
      return await timeout(LocalImgsStore.getItem(imgId))
    } catch (e) {
      return null
    }
  },

  delete1: async (imgId: string): Promise<boolean> => {
    try {
      await timeout(LocalImgsStore.removeItem(imgId))
    } catch (e) {
      return false
    }
    return true
  },
}
