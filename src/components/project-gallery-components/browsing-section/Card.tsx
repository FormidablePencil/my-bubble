import React, { memo } from 'react'
import { Paper, Grid, makeStyles, Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerT } from '../../../store';
import { SELECTED_PROJECT, TOGGLE_CONTENT_DETAILS_SECTION } from '../../../actions/types';
import TechLogo from '../../reusables/TechLogo';
import { projectDataT } from '../../../reducers/projectDataReducer';
import Ellipsis from 'react-ellipsis-pjs';
import ImageInDevice from '@bit/formidablepencil.react-reusables.image-in-device'

const Card = (
  { projectContent,
    techIndexInCollection,
    trimTech
  }: {
    projectContent: projectDataT,
    techIndexInCollection,
    trimTech
  }) => {
  const contentDetailSectionIsClosed = useSelector((state: rootReducerT) => state.contentDetailSectionIsClosed)
  const classes = useStyles();
  const dispatch = useDispatch()
  const onCardClick = async () => {
    await dispatch({ type: SELECTED_PROJECT, payload: techIndexInCollection })

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
            {projectContent.subtitle && <div><h6>({projectContent.subtitle})</h6></div>}
          </Typography>
          <Grid item className={classes.techImagePositioning}>
            <ImageInDevice
              logo={projectContent.logo}
              deviceType={projectContent.type === 'web' ? 'web' : 'mobile'}/* dynamic */
              images={projectContent.images}
              indexOfImageIfNotSwipable={0}
              swipable={false}
              autoPlay={true}
            />
          </Grid>
        </Grid>


        {/* second section */}
        <Grid className={classes.secondSection} container direction='column'>
          <ContentDescription projectContent={projectContent} />

          <Grid
            item container
            className={classes.flex1}
            wrap='nowrap'
            direction='column'
          >
            <Typography
              variant='h6'
              display='inline'>
              Technologies:
            </Typography>
            <Grid
              container
              direction='row'
            >
              <>
                {projectContent.technologies.map((techTitle, index) => {
                  if (trimTech && index >= 4) {
                    if (index === 4)
                      return <p className={classes.ellipsis}>...</p>
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

const ContentDescription = memo(({ projectContent }: any) => {
  const classes = useStyles();
  return (
    <Grid item container
      className={classes.flex2}
      direction='column'
      wrap='nowrap'
    >
      <Typography variant='h6'>
        Brief description:
      </Typography>
      <div className={classes.briefDescription}>
        <Ellipsis style={{ fontSize: 14 }} text={projectContent.description} lines={5} suffix="..." />

        {/* <LinesEllipsis
          text={projectContent.description}
          maxLine='5'
          ellipsis='...'
          trimRight
          basedOn='letters'
        /> */}
      </div>
    </Grid>
  )
})

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
  ellipsis: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
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
    letterSpacing: '.05em',
    lineHeight: '1.4em',
    fontFamily: 'JosefinSans-Medium',
    // fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary[900],
    marginLeft: '1em',
    fontSize: '.9em',
  },
}));

export default Card