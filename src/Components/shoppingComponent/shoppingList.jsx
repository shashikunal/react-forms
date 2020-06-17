import React, { Component, Fragment } from "react";
import ShoppingForm from "./shoppingForm";
import { uuid } from "uuidv4";
class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          productname: "T-shirt",
          qty: "1",
          id: uuid(),
        },
        {
          productname: "pant",
          qty: "3",
          id: uuid(),
        },
        {
          productname: "shoe",
          qty: "3",
          id: uuid(),
        },
      ],
    };
    this.addItems = this.addItems.bind(this);
  }

  addItems(item) {
    let newItem = { ...item, id: uuid() };
    this.setState((state) => ({
      items: [...state.items, newItem],
    }));
  }
  renderItem() {
    return (
      <Fragment>
        <ul className="list-group">
          {this.state.items.map((product) => (
            <Fragment key={product.id}>
              <li className="list-group-item my-2" key={product.id}>
                <span className="font-weight-bold">{product.productname}</span>
                <span className="badge badge-dark badge-pill float-right">
                  {product.qty}
                </span>
              </li>
            </Fragment>
          ))}
        </ul>
      </Fragment>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderItem()}
        <ShoppingForm addItems={this.addItems} />
      </Fragment>
    );
  }
}

export default ShoppingList;
