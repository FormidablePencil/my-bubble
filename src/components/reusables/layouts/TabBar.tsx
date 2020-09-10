import React, { useState } from 'react'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'

function TabBar({ onChangeFocusedTab, tabProps, defaultTab }) {

  const classes = useStyles();
  const [focusedTab, setFocusedTab] = useState(defaultTab)

  const onClickHandler = (title) => {
    setFocusedTab(title)
    onChangeFocusedTab(title)
  }

  return (
    <div className={classes.relative}>
      <Grid container direction='row' className={classes.container}>
        {tabProps.map(prop =>
          <Grid item key={prop.title}>
            <Button
              className={`
                ${classes.tab} 
                ${prop.title === focusedTab && classes.activeTab}
                `}
              onClick={() => onClickHandler(prop.title)}
            >
              <Typography variant='body1'>{prop.title}</Typography>
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  )
}

export default TabBar


const useStyles = makeStyles((theme) => ({
  relative: {
    position: 'relative',
  },
  container: {
    position: "absolute",
    top: -20,
  },
  tab: {
    background: 'lightGrey',
    borderRadius: '7px 7px 0px 0px',
    width: '5em',
    height: 20,
    margin: '0 .5em 0 .5em',
    justifyContent: 'center',
    textTransform: "none",
  },
  activeTab: {
    background: 'white'
  }
}));