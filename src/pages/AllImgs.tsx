import { useEffect, useState } from 'react'
import { CardList } from '../components/ImgCardList'
import { UnplashImg } from '../services/unsplash'

interface AllImgProps {
  imgName: string,
  apiQuery: (imgName: string) => Promise<UnplashImg[] | null>,
  loadingComponent: JSX.Element
}

export function AllImgs(props: AllImgProps){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImgs, setCustomCardPropsList ] = useState<UnplashImg[]>([])

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
   return (<CardList imgs={loadedImgs}/>)
 }
}