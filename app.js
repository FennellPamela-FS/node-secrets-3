// 3 non-shared files
require("dotenv").config("./.env");

const http = require("http");
const hostname = process.env.SECRET;
const port = process.env.PORT;

const nonSharedFiles = process.env.NON_SHARED_FILES;

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    //file blank
    f = ""
    filenames.forEach((file) => {
        f = f + file + "\n"
    })
    // append the NON_SHARED_FILES at the end of all the files
    f = f + "\n" + nonSharedFiles
    res.end(f)
});

server.listen(port, hostname, () => { })


