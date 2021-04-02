import {useState, useEffect, useContext} from 'react'
import {DogFactService} from '../services/DogFactService'
import {UnSplashService} from '../services/UnSplashService'
import { AnimalContext } from '../store/AnimalContext'
import {AllImgs} from './AllImgs'

export function DogOfDay() {
  const [fact, setFact] = useState<string | null>(null)
  const animalContext = useContext(AnimalContext)

  useEffect(() => {
    DogFactService.get1Random().then((x) => setFact(x))
  }, [])

  return (
    <>
      <AllImgs imgName={animalContext.animal} apiQuery={UnSplashService.get1Random} />
      {animalContext.animal === 'dog' ? <h2 style={{textAlign: 'center'}}>{fact ? fact : null}</h2> : null}
    </>
  )
}
