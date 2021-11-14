import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
const Dashboard = (props) => {
  const [getAddress, setAddress] = useState("");
  const [getBalance, setBalance] = useState("");

  useEffect(() => {
    if (
      localStorage.getItem("address") &&
      localStorage.getItem("address") !== undefined
    ) {
      setAddress(localStorage.getItem("address"));
      setBalance(localStorage.getItem("balance"));
    }
  });

  return (
    <div style={{ width: "100%", marginTop: "10px" }}>
      <span style={{ fontSize: "20px" }}>Info Akun</span>
      <Table striped hover variant="dark" responsive={"xl"}>
        <thead>
          <tr style={{ fontSize: "18px" }}>
            <th>Alamat Blockchain</th>
            <th>Saldo Ethereum</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ fontSize: "12px" }}>
            <td>{getAddress}</td>
            <td>{getBalance} Eth</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
