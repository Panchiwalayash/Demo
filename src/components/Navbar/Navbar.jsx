import React from 'react'
import './navbar.css'

export const Navbar = (props) => {

  const {menuOpen,setMenuOpen}=props
  function clickHandler(){
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='topbar'>
        <div className="logo">Navbar</div>
        <div className="content">
          <a id='#home'></a>
            <div className="classes" ><a href='#home'>Home</a></div>
            <div className="classes" ><a href='#pages'>Pages</a></div>
            <div className="classes" ><a href='#about'>About</a></div>

        </div>
        <div className="credential">
          <div className="left">

            <div className="signup">Sign Up</div>
            <div className="login">Log In</div>
          </ div>
          <div className="right">
        <div className={"hamburger "+(menuOpen?"active":"")} onClick={clickHandler}>
          <span ></span>
          <span ></span>
          <span ></span>
        </div>
      </div>
        </div>
    </div>
  )
}
