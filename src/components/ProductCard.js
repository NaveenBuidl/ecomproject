// The Body contains the Product Cards 

// ProductCard component
const ProductCard = ({ prodInfo }) => {
    
    return(
      <div className="product-card">
        <img 
        src = {prodInfo.image}  
        alt= {prodInfo.title} 
        // alt= "{prodInfo.title}" // double quotes gave error 
        />
        <div className="product-details"> 
          <div className = "product-title">
            <h4> {prodInfo.title} </h4>
            {/* <h4> {prodInfo.category} </h4> */}
            {/* <h5> {prodInfo.description} </h5> */}
          </div>      
          <div className = "product-price">
            <h6> ${prodInfo.price} </h6>
            
          </div>      
        </div>      
      </div>
    );
  };

  export default ProductCard;