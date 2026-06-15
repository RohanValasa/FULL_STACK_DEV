//Asynchronous programming
const fs = require('fs')
fs.readFile('myfile.txt','utf8',(err,data)=>{
    if(err){
        console.error('Error reading file: '+err)
        return;
    }
    console.log('File Content : \n'+data)
})
console.log("Print statement, This runs first because reading take time, it doesnt wait for that")


//Accessing command line argument
// console.log('All argumnets : ',process.argv)
// console.log('Third argument : ',process.argv[2])




console.log('1. Starting sync read...');
const data = fs.readFileSync('myfile.txt', 'utf8');
console.log('2. File contents:', data);
console.log('3. Done reading file');


console.log('1. Starting async read...');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('2. File contents:', data);
});

console.log('3. Done starting read operation');