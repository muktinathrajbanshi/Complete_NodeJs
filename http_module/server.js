const http = require("http");

//web server
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.setHeader("Contact-Type", "text/html");
        res.write("<h1>Hello everyone this is me Muktinath Rajbanshi!</h1>");
        res.end();
    }

    if(req.url === "/source-code") {
        res.write("Please visit my youtube channel!");
        res.end();
    }

    if(req.url === "/contact") {
        res.setHeader("Contact-Type", "text/plain");
        res.write("This is my contact section!");
        res.end();
    }

});


const PORT = 3001;
server.listen(PORT, () => {
    console.log(`🔥 Listening on PORT ${PORT}`);
});

//* use node --watch .\server.js (step 1)
//! this is directly refresh the http server without downloading the nodemon ok
//* and if you already downloaded that nodemon then actually nodemon is dependency file please uninstall this
//* by using npm uninstall nodemon
//* afterwards use (step 1)
