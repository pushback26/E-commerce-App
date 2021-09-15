import React from 'react'

function AddProduct() {
    return (
        <div>
        <div className="input-field inline">
            <input id="email_inline" type="email" className="validate" />
            <label for="email_inline">Email</label>
            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
        </div>
    </div> 
    )
}

export default AddProduct;
