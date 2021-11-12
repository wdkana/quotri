import Web3 from "web3";
import QuotriContract from "contracts/Quotri.json";

const Contract = require("web3-eth-contract");

let current_account;
let initial = false;
export const init = async () => {
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    //set current account
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        current_account = accounts[0];
      })
      .catch((err) => {
        console.error(err);
        return;
      });

    //change to other account
    provider.on("accountsChanged", (new_accounts) => {
      current_account = new_accounts;
      console.log("changed account to ", new_accounts);
    });
  }

  //set provider

  //initialize finish
  const web3 = new Web3(provider);
  initial = true;
  return web3;
};

export const web3 = async () => {
  if (!initial) {
    await init();
  }
  const web3 = await init();
  web3.eth.getAccounts(function (error, result) {
    let contract = new Contract(JSON.parse(QuotriContract.abi), result[0]);
    console.log('contr => ', contract);
});
  
  //   let test = contract.methods
    // .createQuote("asdf")
    // .send({ from: account })
    // .on("receipt", (r) => {
    //   console.log("r => ", r);
    // });
//   console.log("test => ", test);
};
