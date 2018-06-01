const express = require('express'),
path = require('path');
const app = express();

app.use(['/'], express.static('./frontend/dist/frontend'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/dist/frontend/index.html'));
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000!'));