import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='container'>
        <div className="main_img sunglasses_container">
            <Link to="/sunglasses" className="cta cta_sunglasses">
                Sunglasses
            </Link>
        </div>
        <Link to="/perfumes" className="main_img perfumes_container">
            <div className="cta cta_perfumes">Perfumes</div>
        </Link>
    </div>
  )
}

export default Main