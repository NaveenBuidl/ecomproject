//  Header component
// React Fragments can use <> and </> instead of extra div
const Header = () => {
    return (
      <div className="navBar">
        <img 
        className="logo" 
        src="https://www.zarla.com/images/zarla-easy-store-1x1-2400x2400-20211103-bpfxypyp7rfpth974gxh.png?crop=1:1,smart&width=250&dpr=2" 
        alt="Logo Description"
        />
        
        <div>
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
        </ul>
  
        </div>
        
  
      </div>
  
    )
  }
// exporting one component per file
//  default export
  export default Header;