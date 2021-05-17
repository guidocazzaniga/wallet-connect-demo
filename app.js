import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";

var instance,account,web3;
const address = "0x24609b8964C151A5eb9633bE108D32Ac5651ca11";
const code = require('./truffle/build/contracts/DummyToken.json');

//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
    rpc: {
        5777: "http://localhost:9545"
        // ...
    },
});

//  Enable session (triggers QR Code modal)
provider.enable().then(async () => {
    //  Create Web3 instance
    web3 = new Web3(provider);

    instance = await new web3.eth.Contract(code.abi, address);
    account = provider.accounts[0];

    document.getElementById("button").onclick = function () {
        getTokens();
    };
});

async function getTokens() {
    instance.methods.getTokens(10).send({from: account}).then((res)=>{
        console.log(res);
    });
    
}
