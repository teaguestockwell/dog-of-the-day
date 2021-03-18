import {useState, useEffect} from 'react'
import {LocalFavoriteService} from'../services/LocalFavoriteService'
import {UnSplashImg} from '../services/UnSplash'


export function TestLf() {
  const [isLoading,setIsLoading] = useState(true)
  const [imgState,setImgsState] = useState<UnSplashImg[]>([])

  useEffect(()=>{
    LocalFavoriteService.put1({
      id: 'id',
      authorName: 'empty',
      created: 'empty',
      title: 'empty',
      altTitle: 'empty',
      description: 'empty',
      alt_description: 'empty',
      authorImgUrl: 'empty',
      imgUrl: 'empty',
      imgLink: 'empty',
      likes: 1,
      authorBio: 'empty',
      portfolio_url: 'empty',
      downloadLink: 'empty'
    }).then(()=>{
      LocalFavoriteService.read1('id').then((img)=>{
        if(img!= null){
          setImgsState([img])
          setIsLoading(false)
          console.log('loaded from ld ' + img.id)
        }
      })
    })
  },[])


  return (
    <div>
      <h1>{isLoading.toString()}</h1>
    </div>
  );
}