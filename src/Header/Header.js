import React from 'react'
//assets
import './_header.scss'
import wit from '../images/Wit-1.jpeg'

const Header = () => {
    return(

    <div>
        <img className="logo"src={wit} alt="logo"/>
    </div>
        // <div className="container-header">
        // <h1 className="container-header__header">Women In Tech</h1>
        // </div>
    )
}

export default Header