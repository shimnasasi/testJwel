import React from 'react'
import './Get.css'
import models from '../assets/get.JPG'
import Button from '../elements/Button'

function Get() {
    return (
        <div className='getmain'>

            <h3>Get Inspired</h3>
            <div className='sgetmain'>
                <img src={models} alt="" />
                <Button abhilash="VIEW MORE " />
            </div>
        </div>
    )
}

export default Get