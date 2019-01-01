import React from 'react';
const ProductForm = (props) => {
    return (
        <React.Fragment>
            <h2 className="card-title text-center">Please enter product details</h2>
            <form onSubmit={props.saveProdcut}>
                <div className="form-group">
                    <label htmlFor="productName">Name</label>
                    <input value={props.productView[0]} onChange={props.productValue} type="text" className="form-control" name="productName" id="productName" placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="productContent">Description</label>
                    <textarea value={props.productView[1]} onChange={props.productValue} className="form-control" name="productContent" id="productContent" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="productPrice">Price</label>
                    <input onChange={props.productValue} value={props.productView[2]} type="text" className="form-control" name="productPrice" id="productPrice" placeholder="Price" />
                </div>
                <div className="form-group form-check">
                    <input onClick={props.productValue} name="productStock" type="checkbox" className="form-check-input" id="productStock" />
                    <label className="form-check-label" htmlFor="productStock">Available</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
};
export default ProductForm;