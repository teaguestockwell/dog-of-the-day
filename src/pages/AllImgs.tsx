import { useEffect, useState } from 'react'
import { ImgLazyGrid } from '../layout/ImgLazyGrid'
import { UnSplashImg } from '../services/unsplash'

interface AllImgProps {
  imgName: string,
  apiQuery: (imgName: string) => Promise<UnSplashImg[] | null>,
  loadingComponent: JSX.Element
}

export function AllImgs(props: AllImgProps){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImgs, setCustomCardPropsList ] = useState<UnSplashImg[]>([])

  useEffect(() => {
    props.apiQuery(props.imgName).then(unsplashPictures => {
      if(unsplashPictures){
        setCustomCardPropsList(unsplashPictures)
        setIsLoading(false)
      }
    })
  },[props])

 if(isLoading){
   return(props.loadingComponent)
 }

 else{
   return (<ImgLazyGrid imgs={loadedImgs}/>)
 }
}