import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
function NavBar() {

    const { totalItems } = useCart();

  return (
    <div>
       <div className='navcontainer'>
      <div className='navwrapper'>
        <div className='menu'>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
            </ul>
        </div>
        <div className='name'>
        <img className='img1' src='../Images/logo.png' alt='homeimg'></img>
        </div>
        <div className='menu2'>
            <ul className='about1'>
            <Link  to='/about'>About</Link>
            
                </ul>

                <div className='carticon'>
                        <Link to='cart'> 
                          <i class="fa-solid fa-cart-shopping">
                          <h6>{totalItems}</h6>  
                              </i>
                        </Link> 
                      <p>View Cart</p>  
                  </div>  
                </div>
                        
                  
       
      </div>
    </div>
    </div>
  )
}

export default NavBar
