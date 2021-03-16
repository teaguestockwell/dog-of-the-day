import { CustomCard, CustomCardProp } from './CustomCard'



export function CardList(props: CustomCardProp[]){

return (
  <section>
    <ul>
    {props.map(x => (
      <li key={x.id}>
        <CustomCard {...x}/>
      </li>
    ))}
    </ul>
  </section>
)  
}