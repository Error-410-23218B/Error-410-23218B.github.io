var http = require('http');
var fs = require('fs');
var path = require('path');

// Create a server object:
http.createServer(function (req, res) {
    // Set the file path to the requested URL
    var filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);

    // Get the file extension to set the correct content type
    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.json': 'application/json',
        '.txt': 'text/plain',
        '.xml': 'application/xml',
        '.woff': 'application/font-woff',
        '.woff2': 'application/font-woff2',
        '.otf': 'application/font-otf',
        '.ttf': 'application/font-ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.map': 'application/octet-stream'
    };

    // Default to 404 if the file is not found
    fs.readFile(filePath, function (err, data) {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.write('<h1>404 Not Found</h1>');
            } else {
                res.writeHead(500);
                res.write('Server Error: ' + err.code);
            }
            res.end();
            return;
        }

        // Serve the file with the appropriate content type
        res.writeHead(200, { 'Content-Type': mimeTypes[extname] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(8080); // The server object listens on port 8080

console.log('Server running at http://localhost:8080/');