import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ListButton from './ListButton';
 


const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://shoptech.com.vn/wp-content/uploads/2017/08/chiem-nguong-hinh-anh-bau-troi-hung-vi-tuyet-dep-20.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center'}}>
            Khoảng lặng
          </Typography>
          <Typography component="p" style={{ textAlign: 'justify'}}>
            &nbsp; Khi ta ngắm nhìn sao trên bầu trời, những ngôi sao xa lắc, xa lơ, xa đến nỗi
           khi ánh sáng từ ngôi sao đó truyền tới mắt ta thì có lẽ nó đã tắt hàng tỉ năm về trước.
           Vậy nên ngắm sao cũng như đang nhìn về quá khứ, tình cảm đôi khi người ta giấu kín đến mức
           khi người ta yêu quý nhận ra thì nó đã không còn nguyên vẹn như trước nữa.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
       
            <ListButton />
        
        
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);