import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button, AppBar, CssBaseline, Toolbar, Typography, Box} from '@material-ui/core';
import './App.css';
import main_page from './Images/main_page.jpg';
import logo_111 from './Images/logo_111.PNG';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import SwipeableTemporaryDrawer from './components/drawer'
import MenuIcon from '@material-ui/icons/Menu';
import Swipe from './components/gallery';
import {Link, Route} from "wouter";
import MainPage from './components/MainPage';

document.body.style= 'background:black;overflow:hidden';

const styles = {
  paperContainer: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${main_page})`,
      height: '100vh',
      
      backgroundSize:'100% 100%',
      overflowY: "hidden", /* Hide vertical scrollbar */
      overflowX: "hidden", /* Hide horizontal scrollbar */
      borderRadius: "0px 0px"
  },
  contents: {
    marginRight: "15px"
    
  },
  paper_Container: {
    backgroundImage: `url(${logo_111})`,
    width:"150px",
    height:"150px",
    backgroundSize:'cover'
  },
  youtubeSquare:{
    color:"white",
    margin:'20px',
    "&:hover": {
      color:"red"
    }
  },
  fbSquare:{
    color:"white",
    margin:'20px',
    '&:hover': {
      color:"blue"   
     }
  },
  instaSquare:{
    color:"white",
    margin:'20px',
    '&:hover': {
      color:'pink'
    }
  }
};

function AppBarMediaQuery() {
  const matches = useMediaQuery('(max-width:600px)');
  return <>{matches ? <SwipeableTemporaryDrawer menuicon = {<MenuIcon fontSize="large" style={{color:"white",marginBottom:"9px",marginLeft:"35px"}}/>}/> : 
        <><Link href="/"><a href= "/" className="link"><Typography variant="h6"  style = {styles.contents}><HomeIcon style={{color:"white"}} fontSize="medium"/></Typography></a></Link>
        <Link href="/photos"><a href= "/photos" className="link"><Typography variant="h6"  style = {styles.contents}><PhotoLibraryIcon style={{color:"white"}}/></Typography>  </a></Link>   
        <Typography variant="h6"  style = {{marginRight:"35px"}}><InfoIcon style={{color:"white"}} /></Typography>
        <Typography variant="h6" gutterBottom style = {{marginRight:"30px"}} ><Button variant="contained" color="primary">
  Sign In
</Button></Typography></>
}</>
}



function App() {
  return (
    <>
    

      
      <CssBaseline />
    
      {/* <Paper style={styles.paperContainer}> */}
      <AppBar position="relative" style={{backgroundColor: "black",minHeight:"78px", justifyContent:"space-between",alignItems:"center",boxShadow:"1px 1px 4px #000",flexDirection:"row"}}>
      
        <Box>
        <Toolbar>
        <MusicVideoIcon fontSize="large" style={{paddingBottom:"7px"}}/>
        <Typography variant="h5" gutterBottom style={{paddingTop:"2px"}}>ARPEGGIO</Typography>
        </Toolbar>
        </Box>

        <Box>
        <Toolbar>
        {AppBarMediaQuery()}
        </Toolbar>
        </Box>
        </AppBar>


        
            
            <Route path="/" >{<MainPage></MainPage> }</Route>
            <Route path="/photos">{<Swipe></Swipe>}</Route>
          

      

      
    < />
    
  );
}

export default App;
