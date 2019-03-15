import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }} >
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    textAlign:'left'
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Informations" />
            <Tab label="Skills" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>Mình là Phạm Minh Chánh<br></br> 
           Sinh viên năm thứ 3 trường Đại học Công nghiệp TP.HCM
           <br></br>Chuyên ngành: Khoa học máy tính</TabContainer>
          <TabContainer dir={theme.direction}>
          Có kiến thức nền tảng về:
          <br></br>+ HTML/CSS/Bootstrap
          <br></br>+ Javascript
          <br></br>+ Reactjs 
          <br></br>+ Nodejs 
          <br></br>+ SQL
          </TabContainer>
          <TabContainer dir={theme.direction}>
          {<NotificationsIcon/>} Địa chỉ: Gò Vấp, Hồ Chí Minh
          <br></br> {<PhoneIcon/>} Số điện thoại: 0378622863 
          <br></br> {<MailIcon/>} Email: phamminhchanh98@gmail.com
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);