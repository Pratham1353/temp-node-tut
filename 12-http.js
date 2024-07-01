const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Wellcome to our home page')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('here is our short history')
        res.end()
    }
    else{
        res.write(`
            <h1>Oops!</h1>
            <p>we can't seem to find the page you are looking for</p>
            <a href="/">Home page</a>
            `)
        res.end()
    }
})

server.listen(5000)