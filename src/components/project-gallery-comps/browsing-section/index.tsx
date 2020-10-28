import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, Typography, Chip, Grid } from '@material-ui/core'
import CardLayout from '../../CardLayout';
import { rootReducerT } from '../../../../../store';
import DeviceFrameAndImg from '../../DeviceFrameAndImg';
import { projectDataT } from '../../../../../reducers/projectDataReducer'

function GalleryBrowsingSection(
  { projectDataCollection }:
    { projectDataCollection: projectDataT[], showDetailsSection?}) {
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const classes = useStyles();

  const truncateText = text => text.length > 140 ? text.substring(0, 140) : text
  

  return (
    <Grid
      spacing={6}
      container
      justify='space-evenly'
      className={classes.container}>
      {projectDataCollection.map((project, index) => {
        let trimTech = false
        if (project.technologies.length >= 4) trimTech = true
        if (!project.showInPorfolio) return null
        return (
          <Grid item>
            <CardLayout
              techIndexInCollection={index}
              key={index}


              firstSection={
                <Grid container justify='center' alignItems='center' className={classes.firstSection}>
                  <Typography className={
                    `${project.type === 'mobile'
                      ? classes.projectTitleMobile
                      : classes.projectTitleWebsite}
                  
                    ${project.title.length > 22
                    && classes.multilineTitle}
                    `
                  }>{project.title}</Typography>
                  <Grid item className={classes.techImagePositioning}>
                    <DeviceFrameAndImg projectContent={project} />
                  </Grid>
                </Grid>
              }


              infoSection={
                <Grid className={classes.infoSection} container direction='column'>
                  {/* <Grid item container>
                  <Typography className={classes.title} variant='h6'>{project.title}</Typography>
                </Grid> */}

                  <Grid item container
                    className={classes.flex2}
                    direction='column'>
                    <Typography variant='h6'>Brief description:</Typography>
                    <Typography className={classes.briefDescription} variant='body1'>
                      {truncateText(project.description)}
                    </Typography>
                  </Grid>

                  <Grid item container
                    className={classes.flex1}
                    direction='column'>
                    <Typography variant='h5' display='inline'>Technologies:</Typography>
                    <div>
                      {project.technologies.map((tech, index) => {
                        if (trimTech && index >= 4) {
                          if (index === 4)
                            return (<>...</>)
                          else if (index > 4)
                            return null
                        }
                        const techData = techDataCollection.filter(doc => doc.technology === tech)[0]
                        if (techData && techData.image)
                          return <img
                            key={techData.image}
                            className={classes.techImg}
                            src={techData.image}
                            alt={tech} />
                        else
                          return <Chip
                            className={classes.chip}
                            key={tech}
                            label={tech} />
                        // return <Chip className={classes.chip} key={tech} label={tech} />
                      })}
                    </div>
                  </Grid>
                </Grid>
              } />
          </Grid>
        )
      }
      )}
    </Grid>
  )
}

export default GalleryBrowsingSection


const useStyles = makeStyles((theme) => ({
  container: {
    margin: '1em 0em 1em 0em'
  },
  firstSection: {
    position: "relative",
    height: '100%',
  },
  projectTitleMobile: {
    // width: 200,
    top: 10,
    textAlign: 'center',
    position: "absolute",
  },
  projectTitleWebsite: {
    width: 200,
    top: 20,
    textAlign: 'center',
    position: "absolute",
  },
  multilineTitle: {
    top: 10,
  },
  techImagePositioning: {
    paddingTop: 20,
  },

  infoSection: {
    backgroundColor: theme.palette.primary[100],
    padding: '1em',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  briefDescription: {
    marginLeft: '1em',
    fontSize: '.8em',
  },
  chip: {
    // backgroundColor: '',
    height: '1.5em',
    margin: '.3em'
  },
  techImg: {
    height: '2em',
    width: '2em',
    margin: '.3em'
  },
}));