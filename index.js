var http = require('http');
http.createServer(function (req, res) {
    console.log(`Jeiyggg got a request at ${req.url}!`)
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
