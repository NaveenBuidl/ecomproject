/*
Data
https://fakestoreapi.com/products

Header
    Logo
    Nav Bar Items (Home, About Us, COntact, Cart)

Body
    Search Bar
    Restaurant Cards (separate components)

Footer
    Copyright


*/
//  default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import ProductCard from "./components/ProductCard";
// import ReactDOM from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render();

// The key point is that the App component must be defined before you export it using export default App;.
// function App() {
//   return <div> Hello World, from Naveen! </div>;
// }


// const data = 123;

// Component with components
function App() {
  return (
    <div>
      {/* {data} */}
      {/* <Header /> */}
      {/* below works as a functon */}
      {/* {Header()}  */}
      {/* <h1> App component </h1> */}
      {/*  not getting the display of the backpack image because you are invoking the Header(), Body(), and Footer() functions directly inside your JSX. When you invoke these functions, they return React elements, but they are not React components themselves. */}
      {/* {Body()}       */}
      {/* {Footer()} */}
      <Header />
      <Body />
      <Footer />


    </div>  
  );
}


export default App;












/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Naveen is back!
        </a>
      </header>
    </div>
  );
}

export default App;
*/



// //  Header component
// // React Fragments can use <> and </> instead of extra div
// const Header = () => {
//   return (
//     <div className="navBar">
//       <img 
//       className="logo" 
//       src="https://www.zarla.com/images/zarla-easy-store-1x1-2400x2400-20211103-bpfxypyp7rfpth974gxh.png?crop=1:1,smart&width=250&dpr=2" 
//       alt="Logo Description"
//       />
      
//       <div>
//       <ul>
//         <li> Home </li>
//         <li> About Us </li>
//         <li> Contact Us </li>
//       </ul>

//       </div>
      

//     </div>

//   )
// }


// // Body component
// const Body = () => {
//   // return <h1> Body Component </h1>
//   return (
//     // JSX fragments needed <> ... </>  
//     <>  
//       <input type = "text" />
//       <button> Search</button>
//       <div className="product-card-list">
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//         <ProductCard />
//       </div>
      
//     </>
    
//   );  
// }; 

// // ProductCard component
// const ProductCard = () => {
//   return(
//     <div className="product-card">
//       <img 
//       src = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" 
//       alt= "" 
//       />
//       <div className="product-details"> 
//         <div className = " ">
//           <h3> title </h3>
//           <h4> category </h4>
//           <h5> description </h5>
//         </div>      
//         <div className = " ">
//           <h3> price </h3>
          
//         </div>      
//       </div>      
//     </div>
//   );
// };

// // Footer component
// const Footer = () => {
//   return(
//     <h1> Footer </h1>
//   );
// }
