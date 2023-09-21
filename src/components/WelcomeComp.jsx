import React from "react";
import anime from 'animejs'
import quizzardLogo  from '../assets/quizzard_logo.svg'

export default function WelcomeComp({setHasStarted}) {
    function buttonUp() {
        anime({
            targets: '.grid__start-btn',
            translateY: -5,
        })
    }

    function buttonDown() {
        anime({
            targets: '.grid__start-btn',
            translateY: 0,
        })
    }

    React.useEffect(() => {
        const tl = anime.timeline({})
        
        tl.add({
            targets: '.grid__logo, .hat-glow, .grid__sub-title, .grid__title, .grid__start-btn',
            opacity: 1,
            scale: [.95, 1],
            easing: 'easeInQuart',
            delay: anime.stagger(250)
        });

        tl.add({
            targets: '.grid__title',
            textShadow: '0px 0px 15px rgb(0 148 255)'
        }, '+=200');

        anime({
            targets: '.grid__logo',
            direction: 'alternate',
            loop: true,
            easing: 'linear',
            translateY: [-25, 25],
            rotate: [-5, 5],
            autoplay: true
        });

        anime({
            targets: '.hat-glow',
            direction: 'alternate',
            loop: true,
            easing: 'linear',
            translateY: [-25, 25],
            scale: [1, .85],
            rotate: [-5, 5],
            autoplay: true
        });

        return () => {
            anime.remove('.grid__start-btn, .grid__logo, .hat-glow, .grid__sub-title, .grid__title, .grid__start-btn')
        }
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
                <button 
                    className='grid__start-btn' 
                    onClick={() => setHasStarted(prev => !prev)}
                    onMouseOver={buttonUp} 
                    onMouseLeave={buttonDown} >
                    Start Quiz
                </button>
            </div>
        </div>
    )
}