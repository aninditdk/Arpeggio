
import { Button, AppBar, CssBaseline, Toolbar, Typography, Box, Grid} from '@material-ui/core';
import './App.css';
import Image from 'material-ui-image';
import Paper from '@material-ui/core/Paper';
import main_page from './Images/main_page.jpg';
import logo_111 from './Images/logo_111.PNG';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import MusicVideoTwoToneIcon from '@material-ui/icons/MusicVideoTwoTone';
import { FaYoutubeSquare } from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare}  from 'react-icons/fa';



const styles = {
  paperContainer: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${main_page})`,
      height: '100vh',
      
      backgroundSize:'100% 100%'
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
};

function App() {
  return (
    <>
      <CssBaseline />
    
      <Paper style={styles.paperContainer}>
      <AppBar position="relative" style={{backgroundColor: "black",minHeight:"78px", justifyContent:"space-between",alignItems:"center", opacity:"0.8",boxShadow:"1px 1px 4px #000",flexDirection:"row"}}>
      
        <Box>
        <Toolbar>
        <MusicVideoIcon fontSize="large" style={{paddingBottom:"7px"}}/>
        <Typography variant="h5" gutterBottom style={{paddingTop:"2px"}}>ARPEGGIO</Typography>
        </Toolbar>
        </Box>

        <Box>
        <Toolbar>
        <Typography variant="h6"  style = {styles.contents}><HomeIcon fontSize="medium"/></Typography>
        <Typography variant="h6"  style = {styles.contents}><PhotoLibraryIcon /></Typography>
        <Typography variant="h6"  style = {{marginRight:"35px"}}><InfoIcon /></Typography>
        <Typography variant="h6" gutterBottom style = {{marginRight:"30px"}} style={{color:"white"}}><Button variant="contained" color="primary">
  Sign In
</Button></Typography>
        </Toolbar>
        </Box>
        
        
        
      </AppBar>

      <Grid container direction="column" alignItems="center" justify="center" style={{minHeight:"600px", maxWidth:"100vw"}}>
      
      <Paper variant="elevation" elevation={3} style={styles.paper_Container}>
        
      </Paper>
      <Typography  style={{color:"white",fontSize:"10vh",textShadow:"7px 7px 8px #000"}} >ARPEGGIO</Typography>
      <Typography variant="h5" style={{color:"white",textShadow:"14px 20px 8px #000"}} >THE MUSICAL SOCIETY</Typography>
      <span>
      <FaYoutubeSquare color='white' size='3rem' style={{margin:"20px"}}/>
      <FaFacebookSquare color='white' size='3rem' style={{margin:"20px"}} />
      <FaInstagramSquare color='white' size='3rem' style={{margin:"20px"}} />
      </span>
      
      </Grid>
      </Paper>
    < />
  );
}

export default App;
