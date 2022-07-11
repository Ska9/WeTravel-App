import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Avatar , Card , CardActions , CardContent , CardHeader , CardMedia , Collapse , IconButton , Typography } from '@material-ui/core'; 
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import clsx from 'clsx';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

import { Image } from 'cloudinary-react';

import { addItem } from '../_reducers/common';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const {
  title,
  description,
  image,
  products,
  dispatch,
} = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
        <Image
          cloudName='douzlmsdi'
          publicId={image}
          height="200"
          quality="auto"
          width="460"
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
      {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <List className={classes.root}>
      {(products || []).map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <React.Fragment  key={value.id}>
          <ListItem key={value.id} role={undefined} dense >
            {/* <ListItemText id={labelId} primary={`${value.name}`} /> */}
            <ListItemText
          primary={`${value.name}`}
          secondary={
            <React.Fragment>
              <div>
            {`description : ${value.description ? value.description : ''}`}
          
              </div>
              <div>
              {`price : ${value.price}`}
              </div>
            </React.Fragment>
          }
        />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" onClick={
                () => {dispatch(addItem([value]))}
              }>
                <AddShoppingCart />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider/>
          </React.Fragment>
        );
      })}
    </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
