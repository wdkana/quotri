import React, { Component } from "react";
import Typist from "react-typist";
import "./style/landing.css";
import Configs from "./helper/configuration.json";
import ParticlesBg from "particles-bg";
import { sign_in } from "./helper/account";
import InputQuote from "./components/InputQuote";
import LoginButton from "./components/loginButton";

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

  componentDidMount() {}

  toEth(balance) {
    return balance.toString().replace(/\B(?=(\d{4})+(?!\d))/, ",");
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
              {/* <InputQuote self={this} /> */}
              <LoginButton self={this} />
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
