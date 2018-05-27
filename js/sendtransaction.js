
  var qtum = require("qtumjs-wallet");

  async function main() {
      //ключ для генерации аддреса в mainnet
    const privatekeywif ="cPTVbHc7Tpg61TWPCbXDVQWjfq4iYR1XRZ7AkLzz8NpiQXeuCiT8";
    

    const network = qtum.networks.testnet
    const wallet = network.fromWIF(privatekeywif);
    
  const toAddress = "qZaTYNEimGLuqnBDpP3KvBKsFs3DbCuwnr"
  const amount = 1 // 0.15 QTUM
  const result = await wallet.getInfo(); 
  console.log(result);
  //генерируем транзакцию
  const rawtx = await wallet.generateTx(toAddress, amount)
  //отправляемя транзакцию
console.log(rawtx)
 wallet.sendRawTx(rawtx).then(data=> console.log(data)).catch(err => console.log(err))
  }
  main();
