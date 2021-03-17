import { ImgCard } from './ImgCard'
import { UnplashImg } from '../services/unsplash'
import LazyLoad from 'react-lazyload';


export function CardList({imgs}: {imgs: UnplashImg[]}){

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