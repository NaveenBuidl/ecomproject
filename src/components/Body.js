import ProductCard from "./ProductCard";
import ProductSource from "../utils/ProductSource";

// if doing fetch from url
// import React, { useEffect, useState } from 'react';

// Body component
const Body = () => {

    // // if doing fetch from url
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //       .then(res => res.json())
    //       .then(data => setProducts(data));
    //   }, []);

    // return <h1> Body Component </h1>
    return (
      // JSX fragments needed <> ... </>  
      <>  
        <input type = "text" />
        <button> Search</button>
        <div className="product-card-list">
        {ProductSource.map( (p) => (
          <ProductCard key={p.id} prodInfo={p} />
        ))}
        </div>
        
      </>
      
    );  
  }; 

  export default Body;