import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { makeStyles } from '@material-ui/core';

function DropdownBtn({ toggleOn, onClick }) {
  const classes = useStyles();

  return (
    <div onClick={onClick}>
      <ArrowDropDownIcon
        className={`
        ${classes.dropdownIcon} 
        ${toggleOn ? classes.flip1 : classes.flip2}
        `} />
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  dropdownIcon: {
    color: 'white',
    fontSize: 50,
    margin: '-.2em 0em 0em .05em',
    transition: 'color 500ms',
    '&:hover': {
      transition: 'color 500ms',
      color: '#D4E6FF',
    },
  },
  flip1: {
    transition: 'transform 500ms',
    '&:hover': {
      color: '#D4E6FF',
      transition: 'transform 500ms',
    },
  },
  flip2: {
    transform: 'rotateX(180deg) translateY(-2px)',
    transition: 'transform 500ms',
    '&:hover': {
      transition: 'transform 500ms',
    },
  }
}));

export default DropdownBtn
