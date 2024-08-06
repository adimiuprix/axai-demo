import React from 'react'
import NavLink from '../Components/NavLink'
import Home from '../assets/home.svg'
import Earn from '../assets/earn.svg'
import Friend from '../assets/friend.svg'
import Leader from '../assets/leader.svg'
import Exchange from '../assets/exchange.svg'

function NavBar() {

    return (
        <>
            <nav class="btn-nav-sm btm-nav text-sm">
                <NavLink link_to="/" image={Home}>Home</NavLink>
                <NavLink link_to="/earn" image={Earn}>Earn</NavLink>
                <NavLink link_to="/friend" image={Friend}>Friends</NavLink>
                <NavLink link_to="/leader" image={Leader}>Leader</NavLink>
                <NavLink link_to="/exchange" image={Exchange}>Exchange</NavLink>
            </nav>
        </>
    )
}

export default NavBar