import React from 'react'
import './Pic.css'
import her from '../assets/her.JPG'
import his from '../assets/his.JPG'
import red from '../assets/red.jpg'

function Piccard() {
    return (
        <div className='main-pic'>
            <div>
                <img src={her} alt="" />
                <h4>Gift for her</h4>
                <a href="">
                    <h6>shop now</h6>
                    </a>
            </div>
            <div>
                <img src={his} alt="" />
                <h4>Gift for him</h4>
                <a href="">
                    <h6>Shop now</h6>
                </a>
            </div>
            <div>
                <img src={red} alt="" />
                <h4>Gift ideas</h4>
                <a href="">
                    <h6>Shop now</h6>
                </a>
            </div>
        </div>
    )
}

export default Piccard