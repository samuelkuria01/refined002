import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

function Shop() {
    const [menProducts,setMenProducts] = useState([])
    const [womenProducts,setWomenProducts] = useState([])
    const [shoesProducts,setShoesProducts] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(false)
    const [selectedCategory, setSelectedCtegory] =useState('all')



    useEffect(() => {
      const fetchData = async () => {
        try {
          const menResponse = await fetch('http://127.0.0.1:3000/men');
          const womenResponse = await fetch('http://127.0.0.1:3000/women');
          const shoesResponse = await fetch('http://127.0.0.1:3000/shoes');
    
          if (!menResponse.ok || !womenResponse.ok || !shoesResponse.ok) {
            throw new Error('Error fetching data');
          }
    
          const menData = await menResponse.json();
          const womenData = await womenResponse.json();
          const shoesData = await shoesResponse.json();
    
          setMenProducts(menData);
          setWomenProducts(womenData);
          setShoesProducts(shoesData);
          setIsLoading(false); // Make sure to set isLoading to false here
        } catch (e) {
          setError(e.message);
          setIsLoading(false);
        }
      };
      fetchData();
    }, []);
    
    
    
    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (error) {
        return <div>Error: {error}</div>;
      }

      const handleCategoryChange = (category) => {
        setSelectedCtegory(category)
      }

      let displayedProducts;
      if(selectedCategory === 'men'){
        displayedProducts = menProducts
      }else if(selectedCategory === 'women'){
        displayedProducts = womenProducts
      }else if(selectedCategory === 'shoes'){
        displayedProducts = shoesProducts
      } else {
         // Default to displaying all products when selectedCategory is 'all' or any other unknown category
    displayedProducts = [...menProducts, ...womenProducts, ...shoesProducts];
      }

  return (
    <>
     <div className='homefrtext'>
                <ul className='fourthtext'>
                    <li>
                    <button className='fourthbtn' onClick={() => handleCategoryChange('all')}>All</button>
                    </li>
                    <li>
                    <button className='fourthbtn' onClick={() => handleCategoryChange('men')}>Men</button>
                      </li>
                    <li>
                    <button className='fourthbtn' onClick={() => handleCategoryChange('women')}>Women</button>
                    </li>
                    <li>
                    <button className='fourthbtn' onClick={() => handleCategoryChange('shoes')}>Shoes</button>
                    </li>
                </ul>  
         <div class="group">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
          <input placeholder="Search" type="search" class="input"/>
        </div>        
     </div>



     <div className='container'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {displayedProducts.map((product) => (
            <div key={product.id} className='col'>
              <div className='card h-100'>
                <Link to={`/shop/${product.id}`} key={product.id}>
                  <img src={product.image} className='card-img-top' alt={product.p_name} />
                </Link>
                <div className='card-body'>
                  <h5 className='card-title'>{product.name}</h5>
                  <p className='card-text'>{product.price}</p>

             
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Shop


