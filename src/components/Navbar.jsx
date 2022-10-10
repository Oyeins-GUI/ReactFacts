import React from 'react'
import logo from '../assets/react.svg'

export default function Navbar() {
    return (
        <header className='header'>
            <nav className='nav'>
                <div>
                    <img src={logo} className='logo' />
                    <h2 className='nav--logo_text'>ReactFacts</h2>
                </div>
                <h3 className='nav_title'>React - Project 1</h3>
            </nav>
        </header>
    )
}
