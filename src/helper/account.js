import {
  init,
  getAccount,
  getQuoteById,
  createNewQuote,
  getBalance,
} from "./web3client";

export const sign_in = async (self) => {
  try {
    const blockchain = await init();
    if (blockchain) {
      const address = await getAccount(blockchain);
      const balance = await getBalance(self, address[0], blockchain);
      localStorage.setItem("address", address[0]);
      localStorage.setItem("balance", blockchain.utils.fromWei(balance, 'ether'));
      window.location.reload();
    }
  } catch (err) {
    console.error("sign in: ", err);
  }
};

export const sign_out = (self) => {
  localStorage.removeItem("address");
  localStorage.removeItem("balance");
  window.location.reload();
};

export const add_quote = async (self) => {
  if (localStorage.getItem("address") && self.state.quotes.content) {
    if (window.confirm("tambahkan kutipan ini?")) {
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

export const set_content = (self, value) => {
  self.setState({ quotes: { content: value } });
};
