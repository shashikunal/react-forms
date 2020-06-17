import React, { Component, Fragment } from "react";

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productname: "",
      qty: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItems(this.state);
    this.state.productname = "";
    this.state.qty = "";
  }
  render() {
    return (
      <Fragment>
        <form className="my-4" onSubmit={this.handleSubmit}>
          <h1 className="display-5 font-weight-bold text-uppercase">
            Add product
          </h1>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="product_name">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="productname"
                id="product_name"
                value={this.state.productname}
                onChange={this.handleChange}
                placeholder="add product name"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="qty">Product Quantity</label>
              <input
                type="text"
                className="form-control"
                name="qty"
                id="qty"
                value={this.state.qty}
                onChange={this.handleChange}
                placeholder="add product quantity"
              />
            </div>
            <div className="col-md-12">
              <button className="btn btn-dark my-4">add product</button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default ShoppingForm;
