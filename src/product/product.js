import React, { Component } from 'react';
import ProductForm from './productForm';
import ProductView from './productView';
import ProductTable from './productTable';
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: 'Product Name',
            productContent: 'Product Description',
            productPrice: 0.0,
            productStock: false,
            productDetails: []
        };
        this.getProductFormValue = this.getProductFormValue.bind(this);
        this.saveProdcut = this.saveProdcut.bind(this);
    }
    getProductFormValue(e) {
        console.log(e.target.checked );
        this.setState({
            [e.target.name !== 'productStock' && e.target.name]: e.target.value,
            [e.target.name === 'productStock' && e.target.name]: e.target.checked
        });
    }
    saveProdcut(e) {
        e.preventDefault();
        const productData = (this.state.productName !== 'Product Name' && this.state.productContent !== 'Product Description') ? {
            productName: this.state.productName,
            productContent: this.state.productContent,
            productPrice: this.state.productPrice,
            productStock: this.state.productStock,

        } : null;

        if (productData !== null && productData !== false) {
            console.log(productData);
            this.setState((prevState) => {
                return {
                    productDetails: [...prevState.productDetails,
                        productData]
                }
            });
        }
        this.setState({
            productName: 'Product Name',
            productContent: 'Product Description',
            productPrice: 0.0,
            productStock: false,
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-lg-6">
                        <ProductForm saveProdcut={this.saveProdcut} productValue={this.getProductFormValue} productView={[this.state.productName, this.state.productContent, this.state.productPrice, this.state.productStock]} />
                    </div>
                    <div className="col-lg-6">
                        <ProductView productView={[this.state.productName, this.state.productContent, this.state.productPrice, this.state.productStock]} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9" style={{ 'marginTop': '30px' }}>
                        <ProductTable productDetails={this.state.productDetails} />
                    </div>
                </div>
            </React.Fragment >
        )
    }
};
export default Product;