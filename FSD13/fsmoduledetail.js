const fs = require('fs/promises')

// fs.writeFileSync("rohan.txt","Hello Rohan Valasa!")

fs.writeFile("tarun.txt","Hello Tarun Valasa!",(err)=>{
    console.log(err)
})

let data = fs.readFile('tarun.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    else{
        console.log(data)
    }
})

fs.appendFile('tarun.txt',"Yoo when will you come back!",(err)=>{
    console.log(err)
})

fs.readFile('rohan.txt','utf-8') //only works when fs/promises
.then(data=> {
    console.log(data)
})
.catch(err=>{
    console.log(err)
})
