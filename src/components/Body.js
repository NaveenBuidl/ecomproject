// already written hook
import React, { useState, useEffect } from 'react'; 
import ProductCard from "./ProductCard";
import ProductSource from "../utils/ProductSource";

// SEARCH ASPECT
// 1. A state to track the search query.
// 2. A state to track the filtered products.
// 3. An effect hook to filter the products based on the search query.
// 4. A function to handle the search when the button is clicked or when the search query changes.
// 5. Conditional rendering to show filtered products when there is a search query and all products when the search query is empty.

// if doing fetch from url
// import React, { useEffect, useState } from 'react';

// Body component
const Body = () => {
  
  // 1. A state to track the search query.
  // creating a state variable (hooks?) 
  // searchQuery is what is being searched and is initially empty?
  const [searchQuery, setSearchQuery] = useState('');
  // useState returns a state variable
  // above function returns an array
  // setSearchQuery is a method/function which if called will update searchQuery

  // 2. A state to track the filtered products.
  const [filteredProducts, setFilteredProducts] = useState(ProductSource);

  // 4. A function to handle the search when the button is clicked or when the search query changes.
  const handleSearch = () => {
    // Conditional check to filter products or reset to the original list
    const filtered = searchQuery.length > 0
    ? ProductSource.filter( product =>
      //Filter logic based on the product tile
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      : ProductSource; // When search query is empty, show all products
      setFilteredProducts(filtered);
  };

  // 3. An effect hook to filter the products based on the search query.
  useEffect(() => {
    handleSearch();
  }, [searchQuery]); // Dependency array with searchQuery ensures this effect runs when searchQuery changes
 

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
        {/* <button> Search</button> */}
        {/* Zoom in on the search part */}
        <div className="search-bar-container">

          <div className="search-container">
              <input 
                type="text"
                placeholder="Search products"
                className="search-input"
                value={searchQuery}
                onChange = { (e) => setSearchQuery(e.target.value) }
              // Updates searchQuery state on input change
              // for buttons we have onClick, and for search we have onChange
              // event.target is the input part from the search bar
              />

              <button className = "search-button" onClick={handleSearch}> Search </button> 
              {/* Triggers handleSearch on click */}
          </div>
        </div>
         
        <div className="product-list-container">
          <div className="filtered-product-list">
              {/* 5. Conditional rendering to show filtered products when there is a search query and all products when the search query is empty. */}
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} prodInfo={product} />
              ))}
          </div>
        </div>
                
        {/* A cross to cancel the search?  */}

        {/* Displays all the products */}
        {/* <div className="product-card-list">
        {ProductSource.map( (p) => (
          <ProductCard key={p.id} prodInfo={p} />
        ))}
        </div> */}
        
      </>
      
    );  
  }; 

  export default Body;