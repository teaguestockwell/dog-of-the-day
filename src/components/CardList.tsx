import { CustomCard2 } from './CustomCard2'
import { UnplashImg } from '../services'
import LazyLoad from 'react-lazyload';


export function CardList({imgs}: {imgs: UnplashImg[]}){

return (
  <section>
    
    {imgs.map(x => (
      <LazyLoad height={500}>
        <CustomCard2 {...x}/>
      </LazyLoad>
    ))}
  </section>
)  
}