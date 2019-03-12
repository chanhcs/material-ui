import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import header from './header.jpg'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Minh Chánh</Button>
          <a class="fb" target="Blank" href="https://www.facebook.com/pmchanhpk" tabindex="0">
            <i class="fa fa-facebook-official" style={{ fontSize: '30px', color: 'white' }}></i>
          </a>

          <a class="github" target="Blank" href="https://github.com/chanhcs" tabindex="0" style={{position:'relative', left:'10px'}}>
            <i class="fa fa-github" style={{ fontSize: '30px', color: 'white'}}></i>
          </a>

         


          <Typography variant="h6" color="inherit" className={classes.grow} style={{ float: 'left' }}>



          </Typography>
          <Button color="inherit">Giới thiệu bản thân </Button>
          <Button color="inherit">
            <a target="Blank" href="https://face-detection-pmc.herokuapp.com" tabindex="0"  
            style={{color:'white', textDecoration: 'none'}}> Sản Phẩm </a>
          </Button>
          <Button color="inherit">Liên hệ</Button>
        </Toolbar>
      </AppBar>

      <img style={{ width: '100%', height: '550px' }} alt='header' src={header} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);








