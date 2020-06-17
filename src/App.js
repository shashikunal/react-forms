import React, { Component, Fragment } from "react";
import ShoppingList from "./Components/shoppingComponent/shoppingList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <ShoppingList />
        </div>
      </Fragment>
    );
  }
}

export default App;
