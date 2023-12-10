import React from 'react'
import "./Varna.css"
import varna from "../images/varna-logo.png"
function Varna() {
  return (
    <div className='varna'>
      <div className='varnalogodiv'>
        <img className='varnalogo' src={varna} alt="" />
      </div>
      <div className='varnacontent'>
        <h5 className='stone'>PRECIOUS STONE JEWELLERY</h5>
        <p className='para'>The beauty of light is reflected in  a
          myriad of colours as each stone exquisitely
          captures your grace. A resplendent craft in
          pure gold accentuated with precious
          stones. Each piece of jewellery in this
          collection  is an immaculate craft to be treasured.</p>

      </div>
      <div className='varnaimgdiv'>
        <div className='varnaimg1'>
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections1.webp" alt="" />
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections2.webp" alt="" />
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections3.webp" alt="" />
        </div>

        <div className='varnaimg1' >
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections4.webp" alt="" />
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/05/varna.webp" alt="" />
          <img className='varnaimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/varna-collections6.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Varna