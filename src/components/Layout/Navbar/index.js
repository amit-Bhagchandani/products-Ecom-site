import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Layout.css'
import { FaBars, FaCartArrowDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
 
const Navbar = () => {
    const [showLinks, setShowlinks] = useState(false);
    const navLinksContainerRef = useRef(null)
    const navLinksRef = useRef(null)
    const total_cart_items = useSelector(state => state.cart.total_items); 
    const loaction = useLocation()

    useEffect(() => {
        const navLinksHeight = navLinksRef.current.getBoundingClientRect().height
        if(showLinks) {
            navLinksContainerRef.current.style.height = `${navLinksHeight}px`
        }
        else {
            navLinksContainerRef.current.style.height = '0px'
        }
    }, [showLinks])

    useEffect(() => {
        setShowlinks(false)
    },[loaction])

  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <div className='nav-header'>

                <button className='nav-btn' onClick={()=> setShowlinks(!showLinks)} ><FaBars size= '1.2rem' className='toggle'></FaBars></button>
                <Link to="/">LOGO</Link>

                <div className='nav-cart-mobile'>
                    <p className='nav-cart-count'>{total_cart_items}</p>
                    <Link to = '/cart'><FaCartArrowDown size='1.4rem'/></Link>
                </div>
                
            </div>
            <div className='nav-links-container' ref={navLinksContainerRef}>
                <ul className='nav-links' ref={navLinksRef}>
                    <li>
                        <Link className='nav-link' to = '/shop'>Shop</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to = '/about'>About</Link>
                    </li>
                    <li className='nav-cart'>
                        <p className='nav-cart-count'>{total_cart_items}</p>
                        <Link className='nav-link' to = '/cart'><FaCartArrowDown /></Link>
                    </li>
                    <li className='contact-link'>
                        <Link className='nav-link' to = '/contact'>Contact</Link>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar