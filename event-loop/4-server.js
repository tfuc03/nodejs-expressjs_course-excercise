const http = require('http')

const server = http.createServer(
    (req, res) => {
    console.log('request event')
    res.end('Hi, guys!')

}
)

server.listen(5000, ()=>
{
    console.log('Starting')
})