import React from 'react'
import './Product.css'
import Button from '../elements/Button'

function Product() {
    return (
        <div className="main-product" >
            <h3>Aquae Jewels Collections</h3>
            <div className='submain' >

                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/Earring-Pear-Chic-PAIR-Y-shadow-1536x1536.webp" alt="" />
                    <h5>Earrings</h5>
                </div>
                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/BG_01-YG-1-shadow-1536x1536.webp" alt="" />
                    <h5>Bracelets</h5>

                </div>
                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/P_02-YG-E-1-shadow-1536x1536.webp" alt="" />
                    <h5>Necklaces</h5>
                </div>
                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/R-CAVALIER-PREM-Y-1-shadow-1536x1536.webp" alt="" />
                    <h5>Rings</h5>
                </div>
                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/NP-ORIENTAL-BLESS-Y-shadow-1536x1536.webp" alt="" />
                    <h5>Body jewellery </h5>
                </div>
                <div>
                    <img src="https://www.aquae-jewels.com/wp-content/uploads/2023/11/A-HANGING-TRIANGLE-Y-1-shadow-1536x1536.webp" alt="" />
                    <h5>Anklet chains</h5>
                </div>
            </div>
            <Button abhilash="click"/>
            
        </div>
    )
}

export default Product