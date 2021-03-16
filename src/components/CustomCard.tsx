import { Card } from '@material-ui/core'
import { Button } from '@material-ui/core';


export interface CustomCardProp {
  id: string,
  authorName: string,
  created: string,
  description: string,
  authorImgUrl: string,
  imgUrl: string,
  imgLink: string,
}

export function CustomCard(props: CustomCardProp){
  // todo: add isFavoriteState from context provider
  // todo: add toggleFavorite function to call functions within context
  // todo: add padding style

  const isFavorite: boolean = true
  
  return (
    <Card raised={true}>
      <h2>{props.description}</h2>
      <a href={props.imgLink}>
        <img src={props.imgUrl} alt={props.description}/>
      </a>
      <Button>{isFavorite ? 'Remove Favorite' : 'Add Favorite'}</Button>
    </Card>
  )
}
