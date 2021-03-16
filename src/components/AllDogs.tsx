import { useEffect, useState } from 'react'
import { CardList } from './CardList'
import { CustomCardProp } from './CustomCard'

function getCustomCardProps(json:any):CustomCardProp {
  return {
    id: json.id,
    authorName: json.user.name,
    created: json.created_at,
    description: json.description,
    authorImgUrl: json.user.profile_image.medium, // w64 h64
    imgUrl: json.urls.small, // w 400
    imgLink: json.links.self
  }
}

export function AllDogs(){
  const [isLoading, setIsLoading] = useState(true)
  const [loadedCustomCardProps, setCustomCardPropsList ] = useState<CustomCardProp[]>([])


  useEffect(() => {
    fetch(
      `${process.env.API_QUERY}`
    ).then(res =>{
      console.log(res)
      return res.json()
    }).then(data => {
      setCustomCardPropsList(
        data.results.map((x: any) => getCustomCardProps(x))
        )
      setIsLoading(false)
    })
  },[])

  if(isLoading){
    return (
      <section>
        <p>Loading...</p>
      </section>
    )
  }
  else{
    return (
      <CardList {...loadedCustomCardProps}/>
    )
  }
}
