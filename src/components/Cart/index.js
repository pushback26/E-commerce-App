import React from 'react'


export default function Cart({ cart, addToCart, reduceQty, stockReductionHandler, stockAdditionHandler, removeFromCart, StockResetHandler, clearCart }) {
    const getTotalSum = cart.reduce((sum, { cost, quantity }) =>  sum + cost * quantity, 0);

    return (
        <div className="container row ">
            <div className="col s12 center-align">
            <h2>Cart</h2>
            </div>
                
            
            <div>
                {cart.map((product, idx) => (
                  <div className="container col s12" key={idx}>
                      
                        <div className="section"><hr/>
                            <div className="container col s2">
                            <h4>{product.name}</h4>
                                <label>
                                    <input type="checkbox"/>
                                    <span></span>
                                    
                                </label>
                                
                            </div>
                            <div className="container col s2">
                                <img className="responsive-img center-align"
                                src={product.image} 
                                alt={product.name} />
                            </div>
                            <div className="container col s1">
                                <button 
                                    className="waves-effect waves-light btn-small"
                                    onClick={() => {
                                        addToCart(product) 
                                        stockReductionHandler(product)
                                    }}
                                    disabled={product.quantity >= product.stock}
                                > + </button>
                            </div>
                            <div className="container col s2 center-align">
                                <h6>Quantity: {product.quantity}</h6>
                            </div>
                            <div className="container col s1">
                                <button 
                                    className="waves-effect waves-light btn-small"
                                    onClick={() => {
                                        reduceQty(product)
                                        stockAdditionHandler(product)
                                    }} 

                                disabled={product.quantity === 1}
                                > - </button>
                            </div>
                            <div className=" col s2 push-s2">
                            <h6> Price: ${product.cost}</h6>
                            
                            <button 
                            className="waves-effect waves-light btn-small"
                            onClick={() => {
                            removeFromCart(product) 
                            StockResetHandler(product)
                            }}>Remove</button>  
                            </div>
                        </div>
                        
                  </div>  
                  
                ))}
            </div>
            <div className="container col s12 right-align">  
                {cart.length > 1 && (
                    <button 
                        className="waves-effect waves-light btn-small"
                        onClick={() => {
                        clearCart()}}
                    >Clear Cart</button>
                )}
            </div>
            <div className="container col s12 right-align">
                {(getTotalSum !== 0) && (<h5>Total Cost: ${getTotalSum.toFixed(2)}</h5>)}
                {(getTotalSum !== 0) && (<button className="waves-effect waves-light orange btn-small">Check Out</button>)}
            </div>
                          
        </div>
        
    )
}