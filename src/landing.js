import React, { Component } from "react";
import Typist from "react-typist";
import "./style/landing.css";
import Configs from "./helper/configuration.json";
import ParticlesBg from "particles-bg";
import {
  sign_in,
  sign_out,
  add_quote,
  get_quote,
  account_balance,
} from "./helper/account";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkBackgroundModes: [
        "day",
        "terminal",
        "torquoise",
        "alizarin",
        "amythyst",
        "carrot",
        "peterriver",
      ],
      lightBackgroundModes: [
        "night",
        "lightred",
        "lightpurple",
        "lightgreen",
        "lightblue",
        "lightyellow",
      ],
      backgroundType: Configs.backgroundType || "plain",
      appClass: Configs.plainBackgroundMode || "daylight",
      devIntro: Configs.devIntro || "Lorem Ipsum",
      devDesc:
        Configs.devDesc ||
        "Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",
      backgroundMode: "default",
      backgroundIndex: 0,
      bgStyle: {},
      icons: Configs.icons || [],
      account: {
        address: "",
        balance: 0,
      },
      quotes: {
        content: "",
      },
    };
  }

  componentDidMount() {

  }

  toEth(balance) {
    return balance.toString().replace(/\B(?=(\d{4})+(?!\d))/, ",");
  }

  content(value) {
    this.setState({ quotes: { content: value } });
  }

  render() {
    const { appClass, bgStyle, backgroundMode, devIntro, devDesc, icons } =
      this.state;
    const { balance } = this.state.account;
    const { content } = this.state.quotes;

    return (
      <div className={appClass} style={bgStyle}>
        <div className={backgroundMode}>
          <main className="App-main">
            <ParticlesBg type="thick" bg={true} />
            <div className="container">
              <h1 className="intro">{devIntro}</h1>
              <div className="shell">Your Quote is on Web 3.0 now!</div>
              <div className="tagline">
                <Typist>{devDesc}</Typist>
              </div>

              <div className="login">
                <button
                  type="button"
                  onClick={() => sign_in(this)}
                  className="btn btn-danger btn-lg w-100"
                >
                  Coba Sekarang!
                </button>
              </div>
              <div className="icons-social mt-5">
                <p className="h6 text-muted">
                  powered by <a href="#">dea &amp; team</a>
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Landing;
