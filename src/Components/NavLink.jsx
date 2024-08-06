import React from 'react'

function NavLink({ link_to, image, children }) {

    return (
        <>
            <a href={link_to} className="text-primary border-t border-primary bg-gradient-to-b from-primary/10 to-transparent" aria-current="page">
                <img src={image} alt="menu-icon" />
                <span>{children}</span>
            </a>
        </>
    )
}

export default NavLink