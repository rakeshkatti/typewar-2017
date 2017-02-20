const express = require('express');
const path = require('path');
const session = require("express-session");

const app = express();
const hostname = process.env.HOSTNAME || "localhost";
const port = process.env.PORT || 9000;


//Serve static assets in case of production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client/build')));

    // Always return the main index.html, so react-router render the route in the client
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'));
    });
}

app.listen(port, function() {
    console.info("==> ✅  Server is listening");
    console.info("==> 🌎  Go to http://%s:%s", hostname, port);
});