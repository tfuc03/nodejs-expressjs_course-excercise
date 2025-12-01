const http = require('http')
const { readFileSync } = require('fs')

// get file
const homePage = readFileSync('../index.html')

const server = http.createServer((req, res)=>{
    const url = req.url
    //Home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>Page not found!</h1>')
        res.end()
    }
})

.listen(5000)