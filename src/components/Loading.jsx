import anime from 'animejs'
import React from 'react'
import wizard from '../assets/witch.svg'

export default function loading() {
    React.useEffect(() => {
        function circle(radius = 50, steps=36, centerX=0, centerY=0){
            var xValues = [centerX]
            var yValues = [centerY]
            for (var i = 1; i < steps; i++) {
                xValues[i-1] = (centerX + radius * Math.cos(Math.PI * i / steps-Math.PI/2))
                yValues[i-1] = (centerY + radius * Math.sin(Math.PI * i / steps-Math.PI/2))
           }
           return [[...xValues, ...xValues.map((el) => -1 * el)], [...yValues, ...yValues.map((el) => -1 * el)]]
        }
        const circlePoints = circle()
        anime({
            targets: '.wizard',
            translateX: circlePoints[0],
            translateY: circlePoints[1],
            direction: 'normal',
            rotate: 360,
            easing: 'linear',
            autoplay: true,
            loop: true
        })

        return () => {
            anime.remove('.wizard')
        }
    }, [])

    return (
        <div className='loading-cont'>
            <img className='wizard' src={wizard} alt="flying wizard" />
            <div className="circle-small"></div>
            <div className="circle-large"></div>
        </div>
    )
}