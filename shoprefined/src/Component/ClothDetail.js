import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

function ClothDetail() {
    const [clothData, setClothData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const params = useParams()
    const clothId = params.clothId
    const [buttonClicked, setButtonClicked] = useState(false)


    const { addItem } = useCart();

    useEffect(() =>{
        const fetchClothData = async ()=>{
            try{
                const res = await fetch(`http://localhost:3000/women/${clothId}`)
                if(!res.ok){
                    throw new Error('Error fetching data')
                }
                const data = await res.json()
                setClothData(data)
                setIsLoading(false)
            } catch(e){
                setError(e.message)
                setIsLoading(false)
            }
        }
        fetchClothData()
    },[clothId])

    if(isLoading){
        return <div>LOading...</div>
    }
    if(error){
        return <div>Error: {error}</div>
    }

    const handleAddToCart = () => {
        addItem( {...clothData})
        setButtonClicked(true)
        alert('Item added successfully')
    }


  return(
    <div className='clothdetail'>
        <div >
            <Link to='/shop'>
            <button className='goback'><i class="fa-sharp fa-solid fa-arrow-left"></i> Go Back</button>
            </Link>
        </div>
        <div className='cloth_card'>
            <div className='clothimage'>
            <img className='halua6' src={clothData.image} alt='heyy' />
            </div>
            <div className='clothtext'>
                <p className='dname'>{clothData.name}</p>
                <p className='tname'>{clothData.price}</p>
                <p className='gname'>{clothData.description}</p>
                <div>
                {/* Add to cart button */}
                <button className={`cartbtn ${buttonClicked ? 'btn-clicked' : ''}`}
                onClick={handleAddToCart}
                >
                 <span>Add to cart</span> 
                </button>
         </div>
            </div>
        </div>
        
    </div>
  )
}

export default ClothDetail
