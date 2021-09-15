import React, { useEffect } from 'react'


 function Products({ products, addToCart, stockReductionHandler }) {

    useEffect(() => {
        console.log('products render')
    }, [])

    return (
    <div 
    // className="row containter center-align"
    className="container row center-align"
    > 
        
        <h2>Products</h2>
        
        <div>
            <div>
            {products.map((product, idx) => (
                    <div 
                        key={idx} 
                        className="container col s3"
                        >
                        <hr />    
                        <h4>{product.name}</h4>
                        
                        <h5>${product.cost}</h5>
                        <h6>In-stock: {product.stock}</h6>
                        <div className="container">
                        <img 
                            className="responsive-img center-align" 
                            src={product.image} 
                            alt={product.name}/>
                        </div>
                        <button
                            className="waves-effect waves-light btn-small"
                            onClick={() => {
                            addToCart(product)
                            stockReductionHandler(product)
                        }}
                        disabled={product.stock === 0}
                        >Add to Cart</button>

                    </div>
                ))
            }
            
            </div>
            
        </div>
        {/* <div className="col s6 push-s10">
        <a href="/dashboard" className="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div> */}
    </div>
    )
}

export default Products;