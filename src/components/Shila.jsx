import React, { useState } from 'react'
import "./Shila.css"
import Shilaimages from './Shilaimages'
import shila from "../images/zara2.jpg"
function Shila() {
  const [view, setView] = useState(false)
  return (
    <div className='shilamain'>
      <h2 className='h2'>Arabian Gold And Diamond Collections</h2>
      <img className='shilaimg' src={shila} alt="" />
      <button className='btnn' onClick={() => { setView(!view) }}>View More</button>
      {view ? <Shilaimages /> : null}
    </div>

  )
}export default Shila