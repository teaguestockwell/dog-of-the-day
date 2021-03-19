import axios, { AxiosRequestConfig } from 'axios'
/** Contains propeperties that make up an img card */
export interface UnSplashImg {
  id: string
  authorName: string
  created: string
  title: string
  altTitle: string
  description: string
  alt_description: string
  authorImgUrl: string
  imgUrl: string
  imgLink: string
  likes: number
  authorBio: string
  portfolio_url: string
  downloadLink: string
}

const base = 'https://api.unsplash.com'
const query = '/search/photos?per_page=500&query='
const queryRandom = '/photos/random?query='
const config:AxiosRequestConfig = {
  headers: {
    'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
  }
}

/** return an array of UnSplashImg from query string */
export const UnSplashService = {
  getN: async (imgName: String): Promise<UnSplashImg[] | null> => {
    // thows if res != 200 && res.results.length = 0
    try {
      const json = await (await axios.get(base + query + imgName, config)).data

      // for construct  a UnSplashImg for each obj
      return json.results.map((result: any) => {
        return {
          portfolio_url: result.user.links.html,
          title: result.title,
          altTitle: result.altTitle,
          id: result.id,
          authorName: result.user.name,
          created: result.created_at,
          description: result.description,
          alt_description: result.alt_description,
          authorImgUrl: result.user.profile_image.medium, // w64 h64
          imgUrl: result.urls.small, // w=400 => 4=600
          imgLink: result.links.html,
          downloadLink: result.links.download,
          likes: result.likes,
          authorBio: result.user.bio,
        }
      })
    } catch (e) {
      // TODO: implement on empty res
      return null
    }
  },
  get1Random: async (imgName: String): Promise<UnSplashImg[] | null> => {
    // thows if res != 200 && res.results.length = 0
    try {
      const json = (await axios.get(base + queryRandom + imgName,config)).data

      // for construct  a UnSplashImg for each obj
      return [
        {
          id: json.id,
          portfolio_url: json.user.links.html,
          title: json.title,
          altTitle: json.altTitle,
          authorName: json.user.name,
          created: json.created_at,
          description: json.description,
          alt_description: json.alt_description,
          authorImgUrl: json.user.profile_image.medium, // w64 h64
          imgUrl: json.urls.small, // w=400 => 4=600
          imgLink: json.links.html,
          downloadLink: json.links.download,
          likes: json.likes,
          authorBio: json.user.bio,
        } as UnSplashImg,
      ]
    } catch (e) {
      // TODO: implement on empty res
      return null
    }
  },
}
