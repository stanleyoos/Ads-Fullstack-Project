import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Bookmark from '@mui/icons-material/Bookmark';
import styles from './NavBar.module.scss'
import { Link } from "react-router-dom";




const  NavBar = () => {
  

  
  

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className={styles.toolbar}>
          <Link className={styles.bookmarkLink} to='/about'><Bookmark  sx={{  mr: 1 }} /></Link>
          <Link className={styles.bookmarkLink} to='/'>
            <div className={styles.adService}>
            AD SERVICE
            </div>
          </Link>
          <Box >
          
          <Link sx={{  mr: 2 }}  to='/about'>Sign in</Link>
          <Link sx={{  mr: 2 }} to='/about'>Sign up</Link>

          {/* render only when user is logged in  */}
          {/* <Link sx={{  mr: 2 }} to='/about'>Sign out</Link> */}
          
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;