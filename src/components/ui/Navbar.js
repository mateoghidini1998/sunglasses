import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <header>
         <nav>
            <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/sunglasses">Sunglasses</Link></li>
               <li><Link to="/perfumes">Perfumes</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
      </header>
    </div>
  )
}

export default Navbar