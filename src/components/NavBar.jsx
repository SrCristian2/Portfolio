import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/NavBarStyles.css'

const NavBar = () => {

    function handleClick() {
        document.querySelector('.navigation').classList.toggle('active');
    }


  return (
    <div className='body_navigation'>
    <div className='navigation' >
        <div className='menuToggle' onClick={handleClick}>
            <i className='bx bx-menu-alt-right'></i>
        </div>
        <ul className='navItems'>
            <NavLink to='/' className='a'>
                <li className='list_item'>
                    <span className='icon'>
                        <i className='bx bx-home bx-tada-hover'></i>
                    </span>
                </li>
            </NavLink>
            <NavLink to='/About' className='a'>
                <li className='list_item'>
                    <span className='icon'>
                        <i className='bx bx-user bx-tada-hover' ></i>
                    </span>
                </li>
            </NavLink>
            <NavLink to='/Portfolio' className='a'>
                <li className='list_item'>
                    <span className='icon'>
                        <i className='bx bx-briefcase-alt-2 bx-tada-hover'></i>
                    </span>
                </li>
            </NavLink>
            <NavLink to='/Contact' className='a'>
                <li className='list_item'>
                    <span className='icon'>
                        <i className='bx bx-phone bx-tada-hover' ></i>
                    </span>
                </li>
            </NavLink>
        </ul>
    </div>
    </div>
    
  )
}

export default NavBar