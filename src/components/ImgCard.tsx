import { useContext, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { UnSplashImg } from '../services/UnSplash'
import { FavoritesContext } from '../store/FavoriteContext'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: '2px 1px 10px',
      width: 400,
     
    },
    media: {
      width: 400,
      height: 400
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#FFFFFF',
    },
  }),
);

export function ImgCard(props: UnSplashImg) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const favoritesCtx = useContext(FavoritesContext);
  const imgIsFavorite = favoritesCtx.isFavoritedImg(props.id)

  function toggleFavoriteStatusHandler():void {
    if (imgIsFavorite) {
      favoritesCtx.removeFavoriteImg(props.id);
    } else {
      favoritesCtx.addFavoriteImg(props);
    }
  }
  
  return (
    <Card className={classes.root} key={props.id}>

      <a href={props.portfolio_url} target="_blank" rel='noreferrer'>
        <CardHeader
          title={props.authorName}
          subheader={props.created}
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              <img alt={''}src={props.authorImgUrl}></img>
            </Avatar>
          }
        />
      </a>

      <CardMedia
        className={classes.media}
        image={props.imgUrl}
        title={props.title}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.description || props.alt_description || 'No description'}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"
         onClick={toggleFavoriteStatusHandler}
        >
          
          <FavoriteIcon style={{color: imgIsFavorite ? '#E61E1E' : '#626262'}} />
        </IconButton>
        
        <a href={props.downloadLink} target="_blank" rel='noreferrer'>
          <IconButton aria-label="share">
            <GetAppIcon/>
          </IconButton>
        </a>
        
        <a href={props.imgLink} target="_blank" rel='noreferrer'>
          <IconButton aria-label="vist source">
              <LanguageIcon/>
            </IconButton>
         </a>


        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={() => {setExpanded(!expanded)}}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{`${props.authorName}:`}</Typography>
          <Typography paragraph>{props.authorBio}</Typography>
        </CardContent>
      </Collapse>

    </Card>
  );
}