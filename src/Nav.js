import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = () => {
    return (
       <nav>
           <ul>
               <Link to="/">Home</Link>
               <Link to="/products">Shop</Link>
               <Link to="/products/product">Product</Link>
               <Link to="/cart">Cart</Link>
               <Link to="/cart/checkout">Checkout</Link>
           </ul>
       </nav>
    )
}

export default Nav;