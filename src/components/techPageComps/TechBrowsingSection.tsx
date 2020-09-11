import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SELECTED_TECH } from '../../actions/types';
import { rootReducerT } from '../../store';
import { makeStyles, Grid } from '@material-ui/core';

function TechBrowsingSection({ onClickItem }: { onClickItem?}) {
  const { techDataCollection } = useSelector((state: rootReducerT) => state)
  const dispatch = useDispatch()
  const classes = useStyles();

  const onClickbrowsingSectionElement = (techNum) =>
    dispatch({ type: SELECTED_TECH, payload: techNum });

  return (
    <>
      {techDataCollection.map((tech, index) =>
        <Grid item
        >
          <div
            key={tech._id}
            onClick={
              onClickItem ? () => onClickItem(index) : () => onClickbrowsingSectionElement(index)
            }
            className={classes.techCardContainer}
            id='hoverEffect'
          >
            <img className={classes.techImg} src={tech.image} alt={tech.technology} />
            {/* <>{tech.description} {tech.technology}</> */}
          </div>
        </Grid>
      )
      }
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  techCardContainer: {
    width: '7.5em',
    height: '7.5em',
    background: 'white',
    margin: '2em',
    borderRadius: '5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // webkitBoxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    // mozBoxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    boxShadow: '0px 4px 21px 0px rgba(0,0,0,0.17)',
    position: 'relative',
  },
  techImg: {
    width: '70%',
    height: '70%',
    objectFit: 'contain'
  }
}));

export default TechBrowsingSection