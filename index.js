const express = require('express'),
    compression = require('compression');
const app = express();

app.use(express.static('public'));

app.use(compression());

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));