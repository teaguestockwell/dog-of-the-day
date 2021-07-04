import {createContext, useState} from 'react'

interface IFavoriteContext {
  animal: string;
  setAnimal: (animal: string) => void
}

export const AnimalContext = createContext<IFavoriteContext>({
  animal: 'dog',
  setAnimal: (animal: string) => {}
})

export function AnimalContextProvider(props: React.PropsWithChildren<{}>) {
  const [animal, setAnimal] = useState('Dog')

  const context: IFavoriteContext = {
    animal: animal,
    setAnimal: (anim:string) => setAnimal(anim)
  }

  return (
    <AnimalContext.Provider value=
      {context}>
      {props.children}
    </AnimalContext.Provider>
  )
}
