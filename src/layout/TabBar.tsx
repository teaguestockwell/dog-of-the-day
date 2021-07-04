import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import {Link} from 'react-router-dom'
import {ChangeEvent, ReactNode, useContext, useState} from 'react'
import Badge from '@material-ui/core/Badge'
import {FavoritesContext} from '../store/FavoriteContext'
import {styled} from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import { AnimalContext } from '../store/AnimalContext'
import MenuItem from '@material-ui/core/MenuItem'
import Grid from '@material-ui/core/Grid'

function getAppBarIndex(): number {
  switch (window.location.pathname) {
    case '/':
      return 0
    case '/favorites':
      return 1
    case '/add':
      return 2
    case '/mine':
      return 3
    case '/random':
      return 4
    default:
      return 0
  }
}

const StyledBadge = styled(Badge)(({theme}) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 23,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))



export function TabBar() {
  const [tabIndex, setTabIndex] = useState(0)
  const favoritesCtx = useContext(FavoritesContext)
  const animalContext = useContext(AnimalContext)
  console.error(animalContext.animal);
  

  function onTabClick() {
    setTabIndex(getAppBarIndex())
  }

  const handleChange = (
    event: ChangeEvent<{
      name?: string | undefined;
      value: unknown
    }>, child: ReactNode) => {
    animalContext.setAnimal(event.target.value as string)
  }

  const animals = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]


  
  return (
    <>
      <AppBar position="fixed" onClick={onTabClick}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ maxHeight: '50vh' }}
      >
        <Grid item xs={6}>
          <Select
            style={{
              width: '100%',
              color: 'white',
              paddingLeft: 40
            }}
            disableUnderline
            value={animalContext.animal} 
            onChange={handleChange}>
              {animals.map(x =>  <MenuItem key={x} value={x}>{x}</MenuItem>)}
          </Select>
        </Grid>   
      </Grid> 
        <Tabs value={tabIndex}  variant={'scrollable'}  scrollButtons={'on'} >
          <Tab label={`${animalContext.animal}s`} component={Link} to="/" />
          <StyledBadge badgeContent={favoritesCtx.totalFavoritedImgs}>
            <Tab
              label="Favorites"
              wrapped
              color="primary"
              component={Link}
              to="/favorites"
            />
          </StyledBadge>
          <Tab label={`Add ${animalContext.animal}`} component={Link} to="/add" />
          <Tab label={`My Animals`} component={Link} to="/mine" />
          <Tab label={`Random`} component={Link} to="/random" />
        </Tabs>
      </AppBar>
    </>
  )
}
