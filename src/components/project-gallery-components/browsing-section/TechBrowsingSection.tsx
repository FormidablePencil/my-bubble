import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { SELECTED_TECH } from '../../../actions/types';
import { rootReducerT } from '../../../store';
import { makeStyles, Grid } from '@material-ui/core';
import { ContextSwipeBar } from '../../../Routes';

function TechBrowsingSection({ showDetailsSection }: { showDetailsSection?}) {
  const { translateSwipeableTab } = useContext(ContextSwipeBar)
  const { techDataCollection } = useSelector((state: rootReducerT) => state)
  const dispatch = useDispatch()
  const classes = useStyles();

  const onClickbrowsingSectionElement = async (techNum) => {
    await dispatch({ type: SELECTED_TECH, payload: techNum });
    if (showDetailsSection)
      showDetailsSection()
    else
      translateSwipeableTab()
  }

  return (
    <Grid container justify='center'>
      {techDataCollection.map((tech, index) =>
        <Grid item>
          <div
            key={tech._id}
            // onClick={() => onClickbrowsingSectionElement(index)}
            className={classes.techContainer}
            id='hoverEffect'
          >
            <img className={classes.techImg} src={tech.image} alt={tech.technology} />
            {/* <>{tech.description} {tech.technology}</> */}
          </div>
        </Grid>
      )}
    </Grid>
  )
}

const useStyles = makeStyles((theme) => ({
  techContainer: {
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