import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

function MenuAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
         
          <Button color="inherit">Minh Chánh</Button>
          
         


          <Typography variant="h6" color="inherit" className={classes.grow} >



          </Typography>
          

          
         
          <a class="fb" target="Blank" href="https://www.facebook.com/pmchanhpk" tabindex="0">
            <i class="fa fa-facebook-official" style={{ fontSize: '30px', color: 'white' }}></i>
          </a>

          <a class="github" target="Blank" href="https://github.com/chanhcs" tabindex="0" style={{position:'relative', left:'10px'}}>
            <i class="fa fa-github" style={{ fontSize: '30px', color: 'white'}}></i>
          </a>

        </Toolbar>
      </AppBar>

     
      
    </div>
  );
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);








