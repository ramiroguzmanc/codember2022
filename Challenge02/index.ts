const msg =
  "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101";
const splittedMessage = msg.match(/1\d{2}|9\d{1}/g);
console.log(splittedMessage);

let outMessage = "";
splittedMessage.forEach((code) => {
  outMessage = outMessage.concat(String.fromCharCode(Number(code)));
});

console.log(outMessage);
