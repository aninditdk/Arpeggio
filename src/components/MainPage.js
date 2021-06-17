import React from 'react'
import Paper from '@material-ui/core/Paper';
import main_page from '../Images/main_page.jpg';
import { Toolbar, Typography,Grid} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { FaYoutubeSquare } from 'react-icons/fa';
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagramSquare}  from 'react-icons/fa';

document.body.style= 'overflow:hidden;';

function ArpeggioMediaQuery() {
    const matches = useMediaQuery('(max-width:600px)');
    return <>{matches ? <Typography  style={{color:"white",fontSize:"9vh",textShadow:"7px 7px 8px #000"}} >ARPEGGIO</Typography> : <Typography  style={{color:"white",fontSize:"10vh",textShadow:"7px 7px 8px #000"}} >ARPEGGIO</Typography>
  }</>
  }

const styles = {
    paperContainer: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url(${main_page})`,
        height: '100vh',
        
        backgroundSize:'100% 100%',
        overflowY: "hidden", /* Hide vertical scrollbar */
        overflowX: "hidden", /* Hide horizontal scrollbar */
        borderRadius: "0px 0px"
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
      },
      youtubeSquare:{
        color:"white",
        margin:'20px',
        "&:hover": {
          color:"red"
        }
      },
}

export default function MainPage() {
    return (
        <>
            <Paper style={styles.paperContainer}>
      <Grid container direction="column" alignItems="center" justify="center" style={{minHeight:"600px", maxWidth:"100vw"}}>
      
      <Paper variant="elevation" elevation={3} style={styles.paper_Container}>
        
      </Paper>
      {ArpeggioMediaQuery()}
      <Typography variant="h5" style={{color:"white",textShadow:"14px 20px 8px #000"}} >THE MUSICAL SOCIETY</Typography>

            <span>
      <a href={'https://youtube.com/channel/UCRLiax7dP8-sT9lznazs7sA'}><FaYoutubeSquare  size='3rem' style={styles.youtubeSquare} /></a>
      <a href={'https://www.facebook.com/groups/304011156450932/?ref=share&exp=e8c2'}><FaFacebookSquare  size='3rem' style={styles.fbSquare} /></a>
      <a href={'https://instagram.com/arpeggioofficial.cetb?utm_medium=copy_link'}><FaInstagramSquare  size='3rem' style={styles.instaSquare} /></a>
      </span>
      
      </Grid>
      </Paper>
        </>
    )
}


