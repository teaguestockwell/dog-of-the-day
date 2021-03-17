import { CustomCard2 } from './CustomCard2'
import { UnplashImg } from '../services'



export function CardList({imgs}: {imgs: UnplashImg[]}){

return (
  <section>
    <ul>
    {imgs.map(x => (
      <li key={x.id}>
        <CustomCard2 {...x}/>
      </li>
    ))}
    </ul>
  </section>
)  
}