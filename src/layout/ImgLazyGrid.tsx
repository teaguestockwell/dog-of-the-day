import { ImgCard } from '../components/ImgCard'
import { UnSplashImg } from '../services/unsplash'
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
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <LazyLoad height={300}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              //backgroundColor: 'black'
            }}>
            <ImgCard {...x}/>
            </div>
          </LazyLoad>
        </Grid>
      ))}
    </Grid>
  </section>
)  
}