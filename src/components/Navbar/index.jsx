import React from 'react'
import { NavLink } from 'react-router-dom'
import style from "./index.module.css"

const index = () => {
    return (

        <header>
            <nav className={style.nav}>
                <NavLink className={style.logo}>Justice<span style={{ color: "#B49C73" }}>.</span></NavLink>
                <ul className='style.ul'>
                    <li>
                        <NavLink to="/" activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/practice" activeClassName='active'>Practise Areas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services" activeClassName='active'>Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/attorneys" activeClassName='active'>Attorneys</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName='active'>Contact Us</NavLink>
                    </li>
                </ul>

            </nav>
            <div>
            
            </div>
        </header>

    )
}

export default index
