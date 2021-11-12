import React, { Component } from "react";
import { init, web3 } from "./helper/web3client";
class Quotes extends Component {
  constructor(props) {
    super(props);
    init();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    web3()
  }

  render() {
    return <div className="container">HELLO WORLD</div>;
  }
}

export default Quotes;
