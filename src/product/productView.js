import React from 'react';
const ProductView = (props) => { 
    return (
        <React.Fragment>
            <h2 className="card-title text-center">Demo view</h2>
            <div className="card border-primary">
                <div className="card-header" style={{'backgroundColor': '#007bff', 'color': '#fff', 'textTransform':'uppercase'}}>
                    {props.productView[0]}
                </div>
                <div className="card-body">
                    <p className="card-text">{props.productView[1]}</p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Availabile? { props.productView[3] ? <span className="badge badge-success">Yes</span> : <span className="badge badge-danger">No</span>}</li>
                    </ul>
                </div>
                <div className="card-footer text-muted">
                    Price: Rs {props.productView[2]}
                </div>
            </div>
        </React.Fragment>
    )
};
export default ProductView;