import React from 'react'
import quizzardLogo from '../assets/quizzard_logo.svg'
import cauldron from '../assets/cauldron.svg'
import Configurations from './Configurations'

export default function Header({hasStarted, setHasStarted, setApiQueryString}) {
    const [openConfig, setOpenConfig] = React.useState(false)
    const [overlayActive, setOverlayActive] = React.useState(false)
    
    function handleConfig() {
        setOpenConfig(prev => !prev)
        setOverlayActive(prev => !prev)
    }

    return (
        <header>
            {hasStarted && <img src={quizzardLogo} onClick={() => setHasStarted(prev => !prev)} alt="Quizzard Logo" />}
            <img className='cauldron' src={cauldron} onClick={handleConfig} alt="Configurations" />
            <div className={overlayActive ? 'overlay active' : 'overlay'} onClick={handleConfig}></div>
            <Configurations  openConfig={openConfig} handleConfig={handleConfig} setApiQueryString={setApiQueryString}/>
        </header>
    )
}