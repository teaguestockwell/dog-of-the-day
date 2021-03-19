import CircularProgress from '@material-ui/core/CircularProgress';
import { useEffect, useState } from 'react'
import { ImgLazyGrid } from '../components/ImgLazyGrid'
import { UnSplashImg } from '../services/UnSplashService'

interface AllImgProps {
  imgName: string,
  apiQuery: (imgName: string) => Promise<UnSplashImg[] | null>,
}

export function AllImgs(props: AllImgProps){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImgs, setLoadedImgs ] = useState<UnSplashImg[]>([])

  useEffect(() => {
    props.apiQuery(props.imgName).then(unSplashImgs => {
      if(unSplashImgs){
        setLoadedImgs(unSplashImgs)
        setIsLoading(false)
      }
    })
  },[props])

 if(isLoading){
   return(<CircularProgress/>)
 }

 else{
   return (<ImgLazyGrid imgs={loadedImgs}/>)
 }
}