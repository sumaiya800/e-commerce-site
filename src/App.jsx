import { useState, useEffect } from 'react'
import Products from './component/Products'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));

  }, [])
  return (
  <div>
    <Navbar />
    <Hero />
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
       gap: "20px",
       marginLeft:"50px", 
       marginRight:"50px",
    }}>  

      {products?.map((product) => ( 
         <Products key={product.id} product={product} />
         ))} 
    </div>
    </div>




  );
}

export default App
