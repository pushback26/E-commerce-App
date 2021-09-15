import React from 'react';
import { Link } from 'react-router-dom';


function Navbar ({ cart, user, logout }) {
    return (
        <nav className="nav-wrapper red darken-2">
            <div className="container">
                <a href="" className="brand-logo">E&B Store</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    {(user.email !== "") && (<li><Link to="/dashboard">Dashboard</Link></li>)}                    
                    {(user.email === "") && (<li><Link to="/login">Login</Link></li>)}
                    <li className="Badge-count"><Link to="/cart"><i className="large material-icons">shopping_cart</i></Link><span className="badge">{cart.length}</span></li>
                    {(user.email !== "") && (<button onClick={logout}>Logout</button>)}
                </ul>
                
            </div>
            <div className="container">
                
            </div>
        </nav>
    )

}
export default Navbar;