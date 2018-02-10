
let EURO = prompt ("enter amount", "100");
let equalEURtoUAH = 33.46* +EURO;

console.log(equalEURtoUAH);
 
let USD = prompt ("enter amount", "52");
let equalUSDtoUAH = 27.11* +USD;

console.log(equalUSDtoUAH);
 
let EUROtoUSD = prompt("enter amount", "1");
let equalEURtoUSD = +EUROtoUSD*33.46/27.11;
equalEURtoUSD = equalEURtoUSD.toFixed(2);
console.log(parseFloat(equalEURtoUSD));