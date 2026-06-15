const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/plain'})
    res.end('Hello Rohan\n')
})

const PORT = 8000
server.listen(PORT,'localhost',()=>{
    console.log(`Server running at PORT ${PORT}`)
})