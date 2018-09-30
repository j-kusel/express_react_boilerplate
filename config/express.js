const express = require('express');
const path = require('path');
var morgan = require('morgan');

module.exports = function() {
    var app = express();
    app.use(morgan('tiny'));
    console.log(__dirname);
    app.use(express.static(`${__dirname}/../client/build`));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/../client/build/index.html'));
    });

    return app;
}

