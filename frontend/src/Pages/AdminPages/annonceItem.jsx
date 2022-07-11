import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Delete from '@material-ui/icons/Delete';
import { Image } from 'cloudinary-react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
    value
} = props;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Delete />
          </IconButton>
        }
        title={value.name}
        subheader={
            <div>
                    <div> {`Establishment :${value.establishment_name}`}</div> 
                    <div> {`Product name :${value.product_name}`}</div> 
                    <div> {`old price :${value.old_price}`}</div> 
                    <div> {`new price :${value.discount_rate}`}</div> 
            </div>
        }
        
  
      />
        <Image
          cloudName='douzlmsdi'
          publicId={value.image}
          height="200"
          quality="auto"
          width="400"
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
      {value.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
