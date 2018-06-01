const express = require('express'),
path = require('path');
const app = express();

app.use(['/'], /*express.static('./frontend/dist/frontend')*/ express.static(path.join(__dirname, './frontend/dist/frontend')));

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));