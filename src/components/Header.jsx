import React from 'react'
import quizzardLogo from '../assets/quizzard_logo.svg'

export default function Header() {
    return (
        <header>
            <img src={quizzardLogo} alt="Quizzard Logo" />
        </header>
    )
}