import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-list'>
                <li>
                    <NavLink to='/' style={(isActive, isPending) => {
                        return {

                            fontWeight: isActive ? 'bold' : '',
                            color: '#0e0e0e',
                            textDecoration: 'none'
                        }
                    }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/customer-info' style={(isActive, isPending) => {
                        return {
                            fontWeight: isActive ? 'bold' : '',
                            color: '#0e0e0e',
                            textDecoration: 'none'
                        }
                    }}>Customer Info</NavLink>
                </li>
                <li>
                    <NavLink to='/product-price' style={(isActive, isPending) => {
                        return {
                            fontWeight: isActive ? 'bold' : '',
                            color: '#0e0e0e',
                            textDecoration: 'none'
                        }
                    }}>Product Price</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
