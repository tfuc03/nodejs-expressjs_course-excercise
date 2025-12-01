const http = require('http')

const server = http.createServer((req, res)=> {
if(req.url === '/'){
    res.end('Welcome to my homepage!')
    return
}
if(req.url === '/about'){
    res.end('This is my history!')
    return
}
res.end(`
<h1>Oops!</h1>
<p>Can find page that you want.</p>
<a href="/">Go Back</a>    
`)
})

server.listen(5000)