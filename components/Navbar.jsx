import React,{useEffect,useRef} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {AiOutlineShopping,AiOutlineSearch,AiOutlineMenu,handleDropdownToggle} from 'react-icons/ai'

import {Cart,Cartegories} from "./"
import { useStateContext } from '../context/StateContext'
const Navbar = () => {
  const {showCart, setShowCart, totalQuantities,handleDropdownToggle ,isDropdownOpen, setIsDropdownOpen} = useStateContext()

  
  return (
    <div className="navbar-container">
      <div className='menu' onClick={handleDropdownToggle} >
        <AiOutlineMenu className='menu-icon'/>
        <p className='logo'>Menu</p>
      </div>
      <p className="logo">
        <Link href={"/"}>Detroit HeadPhones </Link>
      </p>
      <div className='gap'>
      <AiOutlineSearch className="cart-icon" />
  
  <button
    type="button"
    className="cart-icon"
    onClick={() => setShowCart(!showCart)}
  >
    <AiOutlineShopping />
    <span className="cart-item-qty">{totalQuantities}</span>
  </button>
  {isDropdownOpen && !showCart ? <Cartegories/>:<></>}
  {showCart && <Cart />}
      </div>
      
    </div>
  );
}

export default Navbar