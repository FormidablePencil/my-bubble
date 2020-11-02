import React from 'react'
import { Paper, Grid, makeStyles, Typography, Chip } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import { SELECTED_SUBJECT, TOGGLE_CONTENT_DETAILS_SECTION } from '../../../actions/types';
import DeviceFrameAndImg from '../../reusables/DeviceFrameAndImg';
import LinesEllipsis from 'react-lines-ellipsis'
import TechLogo from '../../reusables/TechLogo';
import { projectDataT } from '../../../reducers/projectDataReducer';

const Card = (
  { projectContent,
    techIndexInCollection,
    trimTech
  }: {
    projectContent: projectDataT,
    techIndexInCollection,
    trimTech
  }) => {
  const { contentDetailSectionIsClosed } = useSelector((state: rootReducerT) => state)
  const techDataCollection = useSelector((state: rootReducerT) => state.techDataCollection)
  const classes = useStyles();
  const dispatch = useDispatch()

  const onCardClick = async () => {
    await dispatch({ type: SELECTED_SUBJECT, payload: techIndexInCollection })

    if (contentDetailSectionIsClosed)
      dispatch({ type: TOGGLE_CONTENT_DETAILS_SECTION })
  }

  return (
    <div
      onClick={onCardClick}
      className="ohHoverAnim">
      <Paper className={classes.card} id='hoverEffect'>


        {/* first Section */}
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.firstSection}
        >
          <Typography className={
            `${projectContent.type === 'mobile'
              ? classes.projectTitleMobile
              : classes.projectTitleWebsite}
             ${projectContent.title.length > 22
            && classes.multilineTitle}`
          }>
            {projectContent.title}
          </Typography>
          <Grid item className={classes.techImagePositioning}>
            <DeviceFrameAndImg projectContent={projectContent} />
          </Grid>
        </Grid>


        {/* second section */}
        <Grid className={classes.secondSection} container direction='column'>
          <Grid item container
            className={classes.flex2}
            direction='column'
          >
            <Typography variant='h6'>
              Brief description:
                </Typography>
            <Typography className={classes.briefDescription} variant='body1'>
              <LinesEllipsis
                text={projectContent.description}
                maxLine='5'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
            </Typography>
          </Grid>

          <Grid
            item container
            className={classes.flex1}
            direction='column'
          >
            <Typography
              variant='h5'
              display='inline'
            >Technologies:
            </Typography>
            <Grid
              container
              direction='row'
            >
              <>
                {projectContent.technologies.map((techTitle, index) => {
                  if (trimTech && index >= 4) {
                    if (index === 4)
                      return <>...</>
                    else if (index > 4)
                      return null
                  }
                  return (
                    <Grid item key={techTitle}>
                      <TechLogo techTitle={techTitle} />
                    </Grid>
                  )
                })}
              </>
            </Grid>
          </Grid>
        </Grid>


      </Paper>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  card: {
    height: '15em',
    width: '30em',
    display: 'flex',
    alignItems: 'normal',
    borderRadius: '.5em',
    overflow: 'hidden',
    background: theme.palette.primary[400]
  },


  firstSection: {
    position: "relative",
    height: '100%',
  },
  projectTitleMobile: {
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


  secondSection: {
    backgroundColor: theme.palette.primary[100],
    padding: '1em',
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
}));

export default Card