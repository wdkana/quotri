import React, { Component } from "react";
import { add_quote, set_content } from "../helper/account";
import LoginButton from "./loginButton";

class InputQuote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          onChange={(e) => set_content(this.props.self, e.target.value)}
        />
        <button
          type="button"
          data-bs-toggle="modal" data-bs-target="#login"
          onClick={() => localStorage.getItem("address") && localStorage.getItem("address") !== undefined? add_quote(this.props.self) : <LoginButton self={this.props.self}/>}
          className="btn btn-danger btn-md w-100 mb-2"
        >
          tambahkan ke blockchain
        </button>
      </div>
    );
  }
}

export default InputQuote;
