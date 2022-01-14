import React from 'react'
import { Link } from 'react-router-dom'

const TopNav = () => {
    return (
        <div className='topNav'>
            <div className="container">
                <div className="topNav__wrapper">
                    <h3 className="topNav__brand">
                        <Link to="/">Coins</Link>
                    </h3>
                    <div className="topNav__item">
                        <Link to="/"> Ana Sayfa</Link>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default TopNav
