import { ImgCard } from './ImgCard'
import { UnSplashImg } from '../services/UnSplash'
import LazyLoad from 'react-lazyload';
import Grid from '@material-ui/core/Grid'

export function ImgLazyGrid({imgs}: {imgs: UnSplashImg[]}){

return (
  <section>
    <Grid container direction={"row"}
     justify={"center"}
     spacing={4}
     alignItems={"center"}
     >
      {imgs.map(x => (
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} key={`grid item ${x.id}`}>
          <LazyLoad height={300} key={`ll ${x.id}`}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              //backgroundColor: 'black'
            }} key={`center ${x.id}`}>
            <ImgCard {...x} key={x.id}/>
            </div>
          </LazyLoad>
        </Grid>
      ))}
    </Grid>
  </section>
)  
}