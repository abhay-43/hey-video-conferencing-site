import React from "react";
import "./Header.css"
function Header(){
    return (
        <header>
            <div className="head">
            <img className='icon' src='./favicon.png'></img>
            <p className="head-txt"><b>hey!</b></p>
            </div>
        </header>
    )
}

export default Header;