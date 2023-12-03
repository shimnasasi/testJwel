import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { LiaShoppingBagSolid } from "react-icons/lia";

function Navbar() {
    return (
        <div className='main-nav'>
            <div className='left'>
                <div className="lang">
                    <select className='select' >
                        <option >
                            EN
                        </option>
                        <option >
                            DE
                        </option>
                        <option >
                            FR
                        </option>
                        <option >
                            IT
                        </option>
                        <option >
                            RU
                        </option>
                        <option >
                            ZH
                        </option>

                    </select>
                </div>
                <div className="currency">
                    <select className='select' >
                        <option >
                            AED
                        </option>
                        <option >
                            USD
                        </option>
                        <option >
                            YEN
                        </option>
                        <option >
                            IND
                        </option>
                        

                    </select>
                </div>
            </div>
            <h1>Aquae Jewels</h1>
            <div className="navicons">
                <CiSearch className='icon' />
                <AiOutlineUser className='icon' />
                <LiaShoppingBagSolid className='icon' />
            </div>
        </div>
    )
}

export default Navbar