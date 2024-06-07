import React from 'react'
import styles from "../styles/navbar.module.css"
import logo from "../assets/img/gmail-icon.png"
import {FiMenu} from "react-icons/fi"

export default function Navbar() {
  let {navBarContainer,navbar, hambugger,gmailIcon,gmailtext,searchDiv}= styles
  return (
    <>
    <div className={navBarContainer}>
      {/* {Left sside} */}
      <div className={navbar}>
        <FiMenu className={hambugger} />
        <div className={gmailIcon}>
          <img src={logo} alt="gmail-logo" />
        </div>
        <p  className={gmailtext}>
          Gmail
        </p>
      </div>
    {/* {Search inprt} */}
    <div className={searchDiv}>
      <input type="search" placeholder='Search mail'/>
    </div>
    {/* {Right side} */}
      
    </div>
    </>
  )
}
