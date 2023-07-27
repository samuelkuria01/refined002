import React from 'react'
import { useCart } from 'react-use-cart';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Cart() {

  const navigate = useNavigate()
  const [location,setLocation] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  //state variable  to check whether the fields are filled
  const [isFilled,setIsFilled] = useState(true)

  //fumction to handle checkout button
  const handleCheckout = () =>{
    if(location.trim() === '' || phoneNumber.trim() === ''){
      //if not inputed set isfilled to false
      setIsFilled(false)
    }
    else{
      alert('Proceeding to checkout...')
      setIsFilled(true);

      //navigate to checkout and pass the following data
      navigate('/Checkout',{
        state: {
          location,
          phoneNumber,
          cartData: items,
          total
        }
      })
    }
  }



    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();
    
      if (isEmpty) return (
        <div className='cartempty'>
          <div>
          <p className='isempty'>Your cart is empty</p>
          <Link to='/shop' className='linkempty'>
          <button className='emptybtn'>Go Shop</button>
          </Link>
          </div>
        </div>
      )
    

      // Calculate the total quantity of goods in the cart
   const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);


      const shippingfee = 250

      const total = shippingfee + subtotal

      return (
        <>
        <div className='cartcontainer1'>

        <table className='carttable'>
  <thead className='yakwanza'>
    <tr>
    <th>Product</th>
      <th>Name</th>
      <th className='quantity'>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item) => (
      <tr key={item.id}>
        <td><img className='halua17' src={item.image} alt={item.name} /> </td> 

        <td className='name54'>{item.name}</td>
        <td>
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
            <i id='addbtn' className="fa-solid fa-minus"></i>
          </button>
          {item.quantity}
          <button id='cartbtn3' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
            <i id='addbtn' className="fa-solid fa-plus"></i>
          </button>
        </td>
        <td className='name54'>{parseFloat(item.quantity * item.price).toFixed(2)}</td>
        <td>
          <button  id="dustbin" onClick={() => removeItem(item.id)}>
            <i  className="fa-sharp fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      <div className='carttotalcont'>
    <div className='carttotal'>
      <h3>Cart Total</h3>
      <span class="title">SubTotal: <span className='price2'>Ksh{subtotal.toFixed(2)}</span> </span>
      <p class="title2">Shipping Fee:<span className='price3'> Ksh {shippingfee.toFixed(2)}</span></p>
      <label for="input" class="label">Shipping to:</label>
      <select 
      class="form-select" 
      aria-label="Default select example"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      >
      <option id='selected1' disabled>Select Location</option>
      <option >Select Location</option>
      <option value="nairobi">Nairobi</option>
      <option value="ruiru">Ruiru</option>
      <option value="kiambu">Kiambu</option>
      <option value="thika">Thika</option>
      <option value="kisumu">Kisumu</option>
    </select>

      <div class="input-container">
    <input 
    type="text" 
    id="input" 
    required="" 
    value={phoneNumber} 
    onChange={(e)=> setPhoneNumber(e.target.value)}/>
    <label for="input" class="label">Enter your Number</label>
    <div class="underline"></div>
  </div>

    <p class="title3">Total: <span className='price3'>Ksh {total.toFixed(2)}</span></p>
    </div>

    {/*Error Message */}
    {!isFilled && <p className='error'>Please fill in your location and phoneNumber</p>}
    <button type="button" className='checkout' onClick={handleCheckout}>Proceed to Checkout</button>

    </div>
</div>



        </>
      );
    }

export default Cart



