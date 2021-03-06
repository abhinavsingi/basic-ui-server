const express = require('express');

const app = express();

app.listen(3000, () => {
	console.log('listening on 3000');
});

// path to follow after :3000
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/dist/client.js', (req, res) => {
	res.sendFile(__dirname + '/dist/client.js');
})
