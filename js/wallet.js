
  var qtum = require("qtumjs-wallet");

async function main() {
    //Генерация адреса для testnet
    const network = qtum.networks.testnet 
 // const network = qtum.networks.mainnet 
  const mnemonic = qtum.generateMnemonic()
  const password = "covfefe"

  const wallet = network.fromMnemonic(mnemonic, password)

  console.log("mnemonic:", mnemonic)
  console.log("public address:", wallet.address)
  console.log("private key (WIF):", wallet.toWIF())
}

main();