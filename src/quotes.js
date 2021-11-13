// import React, { Component } from "react";
// import {
//   sign_in,
//   sign_out,
//   add_quote,
//   get_quote,
//   account_balance,
// } from "./helper/account";

// class Quotes extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       init: false,
//       account: {
//         address: "",
//         balance: 0,
//       },
//       quotes: {
//         content: "",
//       },
//     };
//   }

//   componentDidMount() {
//     if (!localStorage.getItem("address") || localStorage.getItem("address") !== undefined) {
//       account_balance(this, localStorage.getItem("address"));
//     }
//   }

//   toEth(balance) {
//     return balance.toString().replace(/\B(?=(\d{4})+(?!\d))/, ",");
//   }

//   content(value) {
//     this.setState({ quotes: { content: value } });
//   }

//   render() {
//     const { balance } = this.state.account;
//     const { content } = this.state.quotes;

//     return (
//       <div className="container-md">
//         <div>
//           {localStorage.getItem("address") == undefined ? (
//             ""
//           ) : (
//             <div>
//               <h3>your account</h3>
//               <p>
//                 <b>address:</b> <i>{localStorage.getItem("address") && localStorage.getItem("address") !== undefined}</i> | <b>balance:</b> {balance} eth
//               </p>
//             </div>
//           )}
//         </div>
//         <div>
//           <p>
//             kutipan yang akan kamu kirim: <br />
//             <i>{content}</i>
//           </p>
//         </div>
//         <textarea
//           className="form-control"
//           id="exampleFormControlTextarea1"
//           rows="3"
//           onChange={(e) => this.content(e.target.value)}
//         />
//         <br />
//         <button
//           type="button"
//           onClick={() => add_quote(this)}
//           className="btn btn-danger mb-5"
//         >
//           tambahkan ke blockchain
//         </button>
//         <div
//           className="d-grid gap-2 d-md-block"
//           style={{ border: "1px solid blue" }}
//         >
//           <button
//             onClick={() => sign_in(this)}
//             className="btn btn-primary"
//             style={{ display: localStorage.getItem("address") && localStorage.getItem("address") !== undefined? "none" : "visible" }}
//           >
//             masuk
//           </button>
//           <button onClick={() => get_quote(this)} className="btn btn-secondary">
//             lihat kutipan
//           </button>
//           {this.state.account.address !== "" ? (
//             ""
//           ) : (
//             <button
//               onClick={() => sign_out(this)}
//               className="btn btn-outline-secondary"
//               style={{ display: localStorage.getItem("address") && localStorage.getItem("address") !== undefined ? "visible" : "none" }}
//             >
//               logout
//             </button>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

// export default Quotes;
