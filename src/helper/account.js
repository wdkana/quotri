import { init, getAccount, getQuoteById, createNewQuote } from "./web3client";
import Web3 from "web3";

let web3 = new Web3(window.ethereum);

export const sign_in = async (self) => {
  try {
    init();
    const adx = await getAccount();
    account_balance(adx);
    self.setState(
      {
        account: { address: adx },
      },
      () => {
        localStorage.setItem("address", self.state.account.address);
      }
    );
  } catch (err) {
    console.error("sign in ", err);
  }
};

export const sign_out = (self) => {
  self.setState(
    {
      account: { address: "" },
      quotes: { content: "" },
    },
    () => {
      localStorage.removeItem("address");
      window.location.reload();
    }
  );
};

export const account_balance = async (self, address) => {
  init();
  try {
    if (localStorage.getItem("address") !== undefined) {
      await web3.eth.getBalance(address, (err, balance) => {
        if (!err)
          self.setState({
            account: {
              ...self.state.account,
              balance: self.toEth(balance.c[0]),
            },
          });
      });
    } else {
      return 0;
    }
  } catch (err) {
    if (err.code == -32002) console.log("waiting for ", err.message);
  }
};

export const add_quote = async (self) => {
  if (localStorage.getItem("address") && self.state.quotes.content) {
    if (confirm("tambahkan kutipan ini?")) {
      try {
        await createNewQuote(
          localStorage.getItem("address"),
          self.state.quotes.content
        );
        alert("kamu berhasil menambah 1 Quotri ke blockchain");
        self.setState({ quotes: { content: "" } }, () => {
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
};

export const get_quote = async (self) => {
  if (localStorage.getItem("address")) {
    const quote = await getQuoteById(1);
    self.setState({ quotes: { content: quote.content } });
  } else {
    alert("tidak ada akses!");
  }
};
