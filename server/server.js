const express = require('express');
const path = require('path');
const app = express();

app.get('/hi', function (req, res) {
    res.send("HI");
});

//Serve static assets in case of production
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '..', 'client/build')));

    // Always return the main index.html, so react-router render the route in the client
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client/build', 'index.html'));
    });

}

app.listen(9000);