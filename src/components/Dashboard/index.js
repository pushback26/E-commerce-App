import React, { useState } from 'react'

const addProductToDashboard = () => {
    console.log("adding product..")
}

const editStockNumber = () => {
    
}


function Dashboard({ products, newCost, handleChange, editCost }) {

    const [editBool, setEditBool] = useState({btn: false})
    const boolSetter = () => {
        // let newProd = [...products]
        // const itemToUpdate = newProd.find(
        //     (item) => item.name === products.name
        // )
        // if (itemToUpdate) {
        //     console.log('test' ,itemToUpdate)
        // } return 
        setEditBool({btn: true})

    }
    const setToFalse = () => {
        setEditBool({btn: false})
    }

    

    return (
        <div className="container row center-align">
            <h4>Dashboard</h4>
            {editBool.btn ? 
                        <div className="input-field col s3 center-align">
                            <input type="number" name={products.name} id={''} onChange={handleChange} value={newCost} />
                                <button onClick={(e) => {
                                    setToFalse(e) 
                                    console.log(newCost)}}>Confirm</button>
                        </div> : ''
            }
            <div>
                {products.map((product, idx) => (
                    <div key={idx} className="container col s12 center-align">
                        <hr />
                        <div className="col s2 center-align">    
                        <h4>{product.name}</h4>
                        </div>
                        <div className=" col s2 center-align">
                            <h5>${product.cost}</h5>
                            <button 
                                className="waves-effect waves-light btn-small" 
                                onClick={(e) => {
                                    boolSetter(e)
                                    editCost(product.stock_id)
                                    // console.log(product.stock_id)
                                }}>Edit</button>
                                        
                        </div>
                        <div className="container col s3">
                            {/* <div className="container col s3">
                                <input type="number"></input>
                            </div> */}
                            <h5>In-stock: {product.stock} </h5>
                            
                            <button className="waves-effect waves-light btn-small">Edit</button>
                        </div>
                        <div className="container col s2">
                        <img 
                            className="responsive-img center-align" 
                            src={product.image} 
                            alt={product.name}/>
                        </div>
                        <button
                            className="btn-floating waves-effect waves-light btn-medium red darken-2"
                            onClick={() => {
                            // addToCart(product)
                            // stockReductionHandler(product)
                        }}
                        disabled={product.stock === 0}
                        ><i className="material-icons">more_horiz</i></button>

                        

                    </div>
                   
                ))}
                    
                


            </div>    
            {/* <div className="col s4 push-s10">
                <button 
                    className="btn-floating btn-large waves-effect waves-light red darken-2"
                    onClick={addProductToDashboard} ><i className="material-icons">add</i></button>
            </div>   

            <div>    
                <a href="#model" className="waves-effect waves-light btn orange modal-trigger">Model</a>

                <div id="model" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
    
                </div>            
            </div>                 */}
            
            
        </div>
        
    )
    
}

export default Dashboard;
