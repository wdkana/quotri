import Web3 from "web3";
import QuotriContract from "contracts/Quotri.json";

const Contract = require("web3-eth-contract");
let web3 = new Web3(window.ethereum);

let current_account;
let initial = false;
let provider = window.ethereum;

export const init = async () => {
  if (typeof provider !== "undefined") {
    //set current account
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        current_account = accounts[0];
      })
      .catch((err) => {
        if (err.code == -32002) {
          localStorage.removeItem("address");
          window.location.reload();
        }
        return;
      });

    //change to other account
    provider.on("accountsChanged", (new_accounts) => {
      current_account = new_accounts;
      window.location.reload();
      console.log("changed account to ", new_accounts);
    });
  }

  //set provider
  web3 = new Web3(provider);

  //initialize finish
  initial = true;
  if (!initial) {
    await init();
  }
  return web3;
};

export const getAccount = () => {
  console.log("getting account data");
  return web3.eth.accounts[0];
};

export const getQuoteById = async (id) => {
  init();
  console.log("connected to quotri contract ");

  Contract.setProvider(provider);

  const contract = new Contract(
    QuotriContract.abi,
    QuotriContract.networks[5777].address
  );

  return contract.methods.quotes(id).call();
};

export const createNewQuote = async (address, content) => {
  init();
  console.log("ready for add quotes");

  Contract.setProvider(provider);

  const contract = new Contract(
    QuotriContract.abi,
    QuotriContract.networks[5777].address
  );

  return contract.methods
    .createQuote(content)
    .send({ from: address })
    .on("receipt", function () {
      console.log("kutipan berhasil ditambahkan");
    });
};
