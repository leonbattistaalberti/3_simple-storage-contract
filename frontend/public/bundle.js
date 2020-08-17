const simpleStorageABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
const simpleStorageAddress = "0xD0382378208E60Ef6433bAc0bA1d03AED6E3d1f1";
const web3 = new Web3("http://localhost:9545");
const simpleStorage = new web3.eth.Contract(
  simpleStorageABI,
  simpleStorageAddress
);

document.addEventListener("DOMContentLoaded", () => {
  let $setData = document.getElementById("setData");
  let $data = document.getElementById("data");
  let accounts = [];

  web3.eth.getAccounts().then((_accounts) => {
    accounts = _accounts;
  });

  let getData = () => {
    simpleStorage.methods
      .data()
      .call()
      .then((result) => {
        $data.innerHTML = result;
      });
  };
});
