import React from 'react'
import "./menu.css"

const Menu = (props) =>  {
    const {menuOpen,setMenuOpen}=props
    function clickHandler(){
        setMenuOpen(!menuOpen)
    }
  return (
    <div className={'menu '+(menuOpen?"active":"")}>
        <ul>
            <li onClick={clickHandler}>
        <a href='#home'>Home</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#pages'>Pages</a>
            </li>
            <li onClick={clickHandler}>
                <a href='#about'>About</a>
            </li>
            
        </ul>
    </div>
  )
}

export default Menu