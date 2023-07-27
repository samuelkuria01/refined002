import React, { useState,useEffect } from 'react'
import { useLocation } from 'react-router-dom'


function Checkout() {
    const [phonenumber, setPhonenumber] = useState('');
    const [useMyLocation, setUseMyLocation] = useState('');
  
    // Access the location state using useLocation
    const location = useLocation().state?.location;
    const phoneNumber = useLocation().state?.phoneNumber;
    const cartData = useLocation().state?.cartData;
    const total = useLocation().state?.total;
  
    useEffect(() => {
      setPhonenumber(phoneNumber); // Set the phone number state with the value from the location state
      setUseMyLocation(location); // Set the location state with the value from the location state
    }, [phoneNumber, location]); // Run this effect whenever phoneNumber or location changes
  
    const handleChange = (e) => {
      setPhonenumber(e.target.value); // Update the phone number state when the phone number input is changed
    };
  
    const handleMyChange = (e) => {
      setUseMyLocation(e.target.value); // Update the location state when the location input is changed
    };

    const handlePlaceOrder = () => {
        
    }

    

  return (
    <div className='checkoutcont'>
      <div class="containerdd">
        <div class="cardc">
            <div class="inputBox1">
                <h3>Your Details </h3>
                <input type="text" required="required"/>
                <span class="user">Full Name</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required" 
                value={phonenumber}
                onChange={handleChange}
                />
                <span>Phone Number</span>
            </div>
            <div class="inputBox">
                <input type="text" required="required"/>
                <span>Email</span>
            </div>

            <div class="inputBox">
                <input type="text" required="required"  
                value={useMyLocation} 
                onChange={handleMyChange}
                />
                <span>Town/City</span>
            </div>
            

            <button class="enter" onClick={handlePlaceOrder}>Place Order</button>

        </div>
    </div>
    <div>
    <img className='feature7'  src='../Images/deliveryman.png' alt='featuredtwo'></img>
            <div className='yourorder'>
                <h2>Your Order</h2>
                <table>
                    <thead>
                        <tr className='ordertr'>
                            <th>Product</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((item) => (
                                <tr className='orderb' key={item.id}>
                                <td>{item.name}</td>
                                <td>Ksh.{item.price}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
                <div>
                    <p>Shipping Fee:<span>250</span></p>
                    <p class="title3">Total: <span className='price3'>Ksh {total.toFixed(2)}</span></p>

                </div>
            </div>
    </div>

    </div>
  )
}

export default Checkout
