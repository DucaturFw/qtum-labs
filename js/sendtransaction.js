
  var qtum = require("qtumjs-wallet");
  var qtumlib = require("qtumjs-lib");

  async function main() {

      //ключ для генерации аддреса в mainnet
    const privatekeywif ="cPTVbHc7Tpg61TWPCbXDVQWjfq4iYR1XRZ7AkLzz8NpiQXeuCiT8";
    

    const network = qtum.networks.testnet
    const wallet = network.fromWIF(privatekeywif);
  //кому отправляем
  const toAddress = "qURwZLvecZ9m42UZ5Ngx8PE9dUmSoXqt2L"
  //сумма 100000000 - 1 qtum 
  const amount = 100000000; 

  //генерируем транзакцию, feeRate указать 400
  const rawtx = await wallet.generateTx(toAddress, amount,{feeRate:400})
  //отправляемя транзакцию
console.log(rawtx)
 wallet.sendRawTx(rawtx).then(data=> console.log(data)).catch(err => console.log(err))
  }
  main();
  