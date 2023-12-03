import React from 'react'
import './Videocard.css'
import one from '../assets/onevcard.mp4'
import two from '../assets/twocard.mp4'
import three from '../assets/threevcard.mp4'
import Button from '../elements/Button'

function Videocard() {
    return (
        <div className='mainvideo'>
            <div>
                <video className='vdocard' src={one} autoPlay muted loop />
                <h4>Embrace the beauty of bangles</h4>
            </div>
            <div>
                <video className='vdocard' src={two} autoPlay muted loop />
                <h4>mis and match with style</h4>

            </div>
            <div>
                <video className='vdocard' src={three} autoPlay muted loop />
                <h4>discover your perfect website</h4>


            </div>
        </div>
    )
}

export default Videocard