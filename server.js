const configExpress = require('./config/express');
const config = require('./config/config');

var app = configExpress();

app.listen(config.PORT, () => console.log(`app listening on localhost:${config.PORT}`));
