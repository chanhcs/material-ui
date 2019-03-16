import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const styles = theme => ({
  root: {
    display: 'flex',
   
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;


    
    //URL from current page
    const url = 'https://minhchanhblog.000webhostapp.com';
    //URL patterns for Social media sites share functionalities
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/home?status=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`

    return (
      <div className={classes.root}>
        
        <div>
          <Button style={{color:'white'}}
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
           
           <IconButton aria-label="Share">
            <ShareIcon/>
          </IconButton>


          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper >
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList >
                      <MenuItem onClick={this.handleClose} ><a target="Blank" href={facebookUrl} tabIndex="0"  
            style={{textDecoration: 'none'}}> Facebook </a></MenuItem>
              <MenuItem onClick={this.handleClose} ><a target="Blank" href={twitterUrl} tabIndex="0"  
            style={{textDecoration: 'none'}}> Twitter </a></MenuItem>
            <MenuItem onClick={this.handleClose} ><a target="Blank" href={linkedinUrl} tabIndex="0"  
            style={{textDecoration: 'none'}}> Linkedin </a></MenuItem>
                    
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);