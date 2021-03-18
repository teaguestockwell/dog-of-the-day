/** Contains propeperties that make up an img card */
export interface UnSplashImg {
  id: string
  authorName: string
  created: string
  title: string
  altTitle: string,
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

/** return an array of UnSplashImg from query string */
export async function getN(imgName: String): Promise<UnSplashImg[] | null>  {
  // thows if res != 200 && res.results.length = 0
  try{
    // send req and parse res to json
    const resBody = await fetch(
      `${process.env.REACT_APP_API_QUERY}${imgName}`,
      {headers: {'Authorization': `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`}}
    ).then(res =>res.json())
    
    // for construct  a UnSplashImg for each obj
    return resBody.results.map(
      (result: any) => {
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
          imgUrl: result.urls.small.slice(0,-3) + '400', // w=400 => 4=600
          imgLink: result.links.html,
          downloadLink: result.links.download,
          likes: result.likes,
          authorBio: result.user.bio
        }
      }
    )
  } catch(e){
    // TODO: implement on empty res
    return null
  }
}