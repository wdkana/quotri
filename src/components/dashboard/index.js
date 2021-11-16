import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { show_balance } from "../../helper/account";
import { getDapp } from "../../helper/web3client";
const Dashboard = ({ self }) => {
  const [showBalance, setShowBalance] = useState(false);
  const [getAddress, setAddress] = useState("");
  const [getBalance, setBalance] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("address") &&
      localStorage.getItem("address") !== undefined
    ) {
      setAddress(localStorage.getItem("address"));
    }
  }, []);

  getDapp(setAddress)

  const myBalance = async () => {
    try {
      if (getBalance === 0) await show_balance(self, getAddress);
      setBalance(self.state.account.balance);
      setShowBalance(!showBalance);
    } catch (e) {
      console.error("myBalance ", e);
    }
  };

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <span style={{ fontSize: "20px" }}>Info Akun</span>
      <Table striped hover variant="dark" responsive={"xl"}>
        <thead>
          <tr style={{ fontSize: "20" }}>
            <th>Alamat Blockchain</th>
            <th>Saldo Ethereum</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ fontSize: "16px" }}>
            <td>{getAddress ? getAddress : "login required"}</td>
            <td>
              <div>
                {showBalance
                  ? `${getBalance} ETH`
                  : getAddress !== ""
                  ? "xx,xx ETH"
                  : "login required"}
                <i
                  className={showBalance ? "fa fa-eye-slash" : "fa fa-eye"}
                  onClick={() => (getAddress ? myBalance() : null)}
                  style={{ marginLeft: 2, fontSize: "20px", float: "right" }}
                ></i>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
