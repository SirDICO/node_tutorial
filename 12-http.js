const http = require('http')

//create server
const server = http.createServer((req, res) =>{

   // console.log(req)
    if(req.url ==='/'){
        res.end('Welcome to our home page') 
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }

    res.end(`
  
    
    ` )

})

//listener
server.listen(5000)