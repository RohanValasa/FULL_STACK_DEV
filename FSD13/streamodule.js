const fs = require('fs')
const readStream = fs.createReadStream('big.txt','utf-8')
const writeStream = fs.createWriteStream('backup.txt')
readStream.pipe(writeStream) //file copying
readStream.on("data", (chunk) => {
  console.log(chunk);
});

