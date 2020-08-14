import React from 'react'
import { Link } from '@material-ui/core'
import { useLocation } from 'react-router-dom';
//Motivations behind this project. Appeal to other deveopers.

function Navbar() {
  const pathName = useLocation().pathname
  const pathNamePartial = pathName.slice(0, 5)

  return (
    <div className='navbar'>
      {pathNamePartial === '/demo' &&
        <div className="tabs">
          <Link
            href='/demo/gallery'
            className={`tab1 ${pathName === '/demo/gallery' && 'activeTab'}`}
          >
            <p>Project Gallery</p>
          </Link>
          <a
            href='/demo/tech'
            className={`tab3 ${pathName === '/demo/tech' && 'activeTab'}`}
          >
            Technologies
            {/* <Typography className='text' variant='h5'>Technologies</Typography> */}
          </a>
        </div>
      }
      {/* <div className="navLinks">
        <Link className='link' variant="h6" href='/'>Home</Link>
        <Link className='link' variant="h6" href='/demo/gallery'>Demo</Link>
      </div> */}
    </div>
  )
}

export default Navbar
