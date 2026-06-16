const http = require('http')

const server1 = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{'Content-Type' : 'text/plain'})
        res.end('Hello Rohan\n')
    }
    else{
        res.end("Invalid url")
    }
})

const PORT = 8000
server1.listen(PORT,'localhost',()=>{
    console.log(`Server running at PORT ${PORT}`)
})


const server2 = http.createServer((req,res)=>{
    if(req.url === "/"){
        return res.end("Home Page")
    }
    else if(req.url === "/about"){
        return res.end("About Page")
    }
    else if(req.url === "/contact"){
        return res.end("Contact page")
    }
    else if(req.url === "/services"){
        return res.end("Services page")
    }
    else{
        res.writeHead(404)
        res.end("Url not found")
    }
})
server2.listen(4000,'localhost',()=>{
    console.log("Server running at port",4000)
})

