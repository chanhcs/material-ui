import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const styles = theme => ({
    card: {
        maxWidth: 400,
        
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class Cards extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            K
            </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Kí ức hôn"
                    subheader="March 11, 2019"
                />
                <CardMedia  
                    className={classes.media}
                    image="http://www.hungryforchange.tv/images/articles/kissing-winter-sweaters.jpg" 

                />
                <CardContent>
                    <Typography component="p">
                        <p style={{ textAlign: 'justify' }}>
                            Sân trường giờ chơi náo động như tổ ong trong đám lửa. Bên lan can,
                            một đôi nam sinh nữ sinh như tách khỏi không gian đặc âm thanh và hơi người,
                            lặng lẽ đứng tì vai nhau...
                        </p>
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        <Typography paragraph >
                            <p style={{ textAlign: 'justify' }}>
                                "Này, đường đột hẹn một người ra nói yêu thì có vô duyên không?"
                                "Có. Nhưng là vô duyên dũng cảm."
                                "Nếu người ta từ chối thì sao?"
                                "Thì muốn đào ngay một cái hố mà rúc đầu xuống. Bởi thế người lớn mới hay mò vào chỗ kín đáo để tỏ tình."
                                "Đối diện người ấy, tim đập thình thịch, mồ hôi rịn đầy, làm sao bày tỏ mà không lắp bắp?"
                                "Hôn, nhằm môi mà hôn.


                 </p>
                            <p style={{ fontSize: '15px', color: 'blue' }}>Đọc full truyện tại
                 <br></br>
                                <a class="fb" target="Blank" href="https://www.truyenngan.com.vn/truyen-ngan/truyen-ngan-yeu/24971-ki-uc-hon.html" tabindex="0">
                                    https://www.truyenngan.com.vn/truyen-ngan/truyen-ngan-yeu/24971-ki-uc-hon.html</a>
                            </p>
                        </Typography>


                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

Cards.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);