
var qtum = require("qtumjs-wallet");

async function main() {
    //ключ для генерации аддреса в mainnet
  const privatekeywif ="cPTVbHc7Tpg61TWPCbXDVQWjfq4iYR1XRZ7AkLzz8NpiQXeuCiT8";
  

  const network = qtum.networks.testnet
  const wallet = network.fromWIF(privatekeywif);
  //адрес контракта erc20
  const contractAddress = "0da856cdbfd01f89be26796cc8841f87d47be7c3"
  //FUNCTIONHASHES в remix метод total suply
const encodedData = "18160ddd"

const result = await wallet.contractCall(contractAddress, encodedData, )

console.log(result);
 

}

main();