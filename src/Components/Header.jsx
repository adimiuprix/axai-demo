import React from 'react'
import LogoVue from '../assets/logovue.svg'

function Header() {

    return (
        <>
            <header class="flex items-center bg-base-300 px-4 py-2">
                <img src={LogoVue} width="50" alt="logo" />
                <p class="justify-self-start p-4">Axai</p>
                <button class="btn ml-auto rounded-full px-6">Connect wallet</button>
            </header>
        </>
    )
}

export default Header