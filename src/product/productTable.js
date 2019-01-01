import React from 'react';
const ProductTable = (props) => {
    console.log(props.productDetails);
    const viewData = props.productDetails.length !== 0 ? props.productDetails.map((item,index) => {
        return (
            <div key={item+index*1000} className="card border-primary" style={{'margin':'14px 0'}}>
                <div className="card-header" style={{ 'backgroundColor': '#007bff', 'color': '#fff', 'textTransform': 'uppercase' }}>
                    {item.productName}
                </div>
                <div className="card-body">
                    <p className="card-text">{item.productContent}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Availabile? {item.productStock ? <span className="badge badge-success">Yes</span> : <span className="badge badge-danger">No</span>}</li>
                    </ul>
                </div>
                <div className="card-footer text-muted">
                    Price: Rs {item.productPrice}
                </div>
            </div>
        ) 
    }) : <div>No Products Availabile</div>
    return (
        <React.Fragment>
            {viewData}
        </React.Fragment>
    )
};
export default ProductTable;