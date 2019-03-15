import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    width: '100%',
    Width: '360px',
    height: '1500px',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List>
        <ListItem button>

          <ListItemText inset primary="Blog" />
        </ListItem>

        <ListItem button onClick={this.handleClick}>

          <ListItemText inset primary="Research" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component="a" target="Blank" href="https://face-detection-pmc.herokuapp.com" tabIndex="0">


              <ListItemText inset primary="Face Detection" />
            </ListItem>







          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);