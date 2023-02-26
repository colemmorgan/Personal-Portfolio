import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <>
    <div className="sidebar__container left-sidebar">
        <div className="sidebar"></div>
        <div className="icon__container">
            <FontAwesomeIcon icon={faGithub} className="social-icon social1 click"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="social-icon social2 click"/>
        </div>
    </div>
    <div className="sidebar__container right-sidebar">
        <div className="sidebar"></div>
        <a href=""> <h2 className="email">colemmorgann@gmail.com</h2></a>
    </div>
    </>
    
  )
}

export default Sidebar