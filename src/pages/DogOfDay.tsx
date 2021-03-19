import {useState, useEffect} from 'react'
import {DogFactService} from '../services/DogFactService'
import {UnSplashService} from '../services/UnSplashService'
import {AllImgs} from './AllImgs'

export function DogOfDay() {
  const [fact, setFact] = useState<string | null>(null)

  useEffect(() => {
    DogFactService.get1Random().then((x) => setFact(x))
  }, [])

  return (
    <section>
      <AllImgs imgName={'dog'} apiQuery={UnSplashService.get1Random} />
      <h2 style={{textAlign: 'center'}}>{fact ? fact : null}</h2>
    </section>
  )
}
