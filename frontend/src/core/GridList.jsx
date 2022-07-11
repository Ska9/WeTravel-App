import React from 'react';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import { GridList , GridListTile , GridListTileBar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';

//Images
import image1 from '../assets/img/Pirate.jpg';
import image2 from '../assets/img/Dar El Jeld.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

const tileData = [
  {
    img: image1,
    title: 'Pirate, Monastir',
    author: 'author',
  },
  {
      img: image2,
      title: 'Dar El Jeld, Tunis',
      author: 'author',
    },
    {
      img: image1,
      title: 'Image',
      author: 'author',
    },
    {
      img: image2,
      title: 'Image',
      author: 'author',
    },
    {
      img: image1,
      title: 'Image',
      author: 'author',
    },
    {
      img: image2,
      title: 'Dar El Jeld, Tunis',
      author: 'author',
    },
];

export default function AdvancedGridList() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} spacing={1} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}



















