import React from 'react'
import { Link } from "react-router-dom"

function NavLink({ link_to, image, children }) {

    return (
        <>
            <Link to={link_to} className="text-primary border-t border-primary bg-gradient-to-b from-primary/10 to-transparent" aria-current="page">
                <img src={image} alt="menu-icon" />
                <span>{children}</span>
            </Link>
        </>
    )
}

export default NavLink