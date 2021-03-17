import { ImgCard } from '../components/ImgCard'
import { UnSplashImg } from '../services/unsplash'
import LazyLoad from 'react-lazyload';


export function ImgCardList({imgs}: {imgs: UnSplashImg[]}){

return (
  <section>
    
    {imgs.map(x => (
      <LazyLoad height={500}>
        <ImgCard {...x}/>
      </LazyLoad>
    ))}
  </section>
)  
}