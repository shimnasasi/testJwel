import React from 'react'
import "./Nidhi.css"
import nidhi from "../images/nidhi-logo.png"
function Nidhi() {
  return (
    <div className='collection'>
      <h2 className='h3'>Arabian Gold And Diamond Collections</h2>
      <div className='collectionimg'>
        <div className='colldiv'>

          <h5 className='h5'>PRECIOUS STONE JEWELLERY</h5>
          <p>The beauty of light is reflected in  a <br />
            myriad of colours as each stone exquisitely  <br />
            captures your grace. A resplendent craft in  <br />
            pure gold accentuated with precious   <br />
            stones. Each piece of jewellery in this  <br />
            collection  is an immaculate craft to be treasured.</p>
        </div>
        <div>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections3.webp" alt="" />
        </div>
        <div>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections2.webp" alt="" />
        </div>
      </div>
      <div className='collectionimg'>
        <div className='colldiv'>
          <div>
            <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections2.webp" alt="" />
          </div>
        </div>
        <div>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections1.webp" alt="" />
        </div>
        <div>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections6.webp" alt="" />
        </div>
      </div>
      <div className='collectionimg'>
        <div className='colldiv'>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections5.webp" alt="" />
        </div>
        <div>
          <img className='colimg' src="https://arabiangoldanddiamonds.com/wp-content/uploads/2023/03/nidhi-collections4.webp" alt="" />
        </div>
        <img className='colimg' src={nidhi} alt="" />
      </div>
    </div>
  )
}

export default Nidhi