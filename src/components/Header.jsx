import React from 'react'
import quizzardLogo from '../assets/quizzard_logo.svg'

export default function Header({setHasStarted}) {
    return (
        <header>
            <img src={quizzardLogo} onClick={() => setHasStarted(prev => !prev)} alt="Quizzard Logo" />
        </header>
    )
}