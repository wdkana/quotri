import React, { Component } from "react";
import { init, getAccount, getQuoteById, add } from "./helper/web3client";
import Web3 from "web3";
let web3 = new Web3(window.ethereum);

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        address: localStorage.getItem("address"),
        balance: 0,
      },
      quotes: {
        content: "",
      },
    };
  }

  componentWillMount() {
    if (localStorage.getItem("address"))
      this.account_balance(localStorage.getItem("address"));
  }

  async signIn() {
    init();
    this.setState(
      {
        account: { address: await getAccount() },
      },
      () => {
        localStorage.setItem("address", this.state.account.address);
        this.account_balance(this.state.account.address);
      }
    );
  }

  async signOut() {
    init();
    this.setState(
      {
        account: { address: "" },
      },
      () => {
        localStorage.removeItem("address");
        this.setState({ account: { balance: 0, address: "" } });
        this.setState({ quotes: { content: "" } });
        window.location.reload();
      }
    );
  }

  async account_balance(address) {
    init();
    await web3.eth.getBalance(address, (err, balance) => {
      if (!err)
        this.setState({
          account: {
            ...this.state.account,
            balance: this.toEth(balance.c[0]),
          },
        });
    });
  }

  async get_quote() {
    if (this.state.account.address) {
      const quote = await getQuoteById(1);
      this.setState({ quotes: { content: quote.content } });
    } else {
      alert("tidak ada akses!");
    }
  }

  async add_quote() {
    if (this.state.account.address && this.state.quotes.content) {
      if (confirm("tambahkan kutipan ini?")) {
        try {
          await add(this.state.account.address, this.state.quotes.content);
          alert("kamu berhasil menambah 1 Quotri ke blockchain");
          this.setState({ quotes: { content: "" } }, () => {
            window.location.reload();
          });
        } catch (error) {
          if (error.code === 4001) alert("transaksi blockchain telah dibatalkan");
          window.location.reload();
        }
      }
    } else {
      alert("kamu tidak punya akses, silahkan KLIK TOMBOL MASUK");
    }
  }

  toEth(balance) {
    return balance.toString().replace(/\B(?=(\d{4})+(?!\d))/, ",");
  }

  content(value) {
    this.setState({ quotes: { content: value } });
  }

  render() {
    const { address, balance } = this.state.account;
    const { content } = this.state.quotes;

    return (
      <div className="container-md">
        <div>
          {!this.state.account.address ? (
            ""
          ) : (
            <div>
              <h3>your account</h3>
              <p>
                <b>address:</b> <i>{address}</i> | <b>balance:</b> {balance} eth
              </p>
            </div>
          )}
        </div>
        <div>
          <p>
            kutipan yang akan kamu kirim: <br />
            <i>{content}</i>
          </p>
        </div>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          onChange={(e) => this.content(e.target.value)}
        />
        <br />
        <button
          type="button"
          onClick={() => this.add_quote()}
          className="btn btn-danger mb-5"
        >
          tambahkan ke blockchain
        </button>
        <div
          className="d-grid gap-2 d-md-block"
          style={{ border: "1px solid blue" }}
        >
          <button
            onClick={() => this.signIn()}
            className="btn btn-primary"
            style={{ display: address ? "none" : "visible", float: "left" }}
          >
            masuk
          </button>
          <button
            onClick={() => this.get_quote()}
            className="btn btn-secondary"
          >
            lihat kutipan
          </button>
          {!this.state.account.address ? (
            ""
          ) : (
            <button
              onClick={() => this.signOut()}
              className="btn btn-outline-secondary"
              state={{ float: "right" }}
            >
              logout
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Quotes;
