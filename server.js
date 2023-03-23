const http = require('http');
const port = 8080;
http
.createServer((req, res) => {
    console.log("url",req.url);
    console.log("method",req.method);
    if(req.url === "/"){
        res.end(`
        <h1> home </h1>
        `);
    }
    if(req.url === "/homepage"){
        res.end(`
        <h1> home page</h1>
        `);
    }
})
.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});