import React from "react";
import anime from 'animejs'
import quizzardLogo  from '../assets/quizzard_logo.svg'

export default function WelcomeComp({setHasStarted}) {

    React.useEffect(() => {
        anime({
            targets: '.grid__logo .hat-glow',
            direction: 'alternate',
            loop: true,
            easing: 'linear',
            translateY: [-25, 25],
            rotate: [-5, 5],
            autoplay: true
        });
    }, [])

    return (
        <div className='grid'>
            <div className='grid__logo-container'>
                <img className='grid__logo' src={quizzardLogo} alt="Quizzard Logo" />
                <span className='hat-glow'></span>
            </div>
            <div className='grid__content'>
                <h2 className='grid__sub-title'>Welcome to </h2>
                <h1 className='grid__title'>Quizzard</h1>
                <button className='grid__start-btn' onClick={() => setHasStarted(prev => !prev)}>Start Quiz</button>
            </div>
        </div>
    )
}