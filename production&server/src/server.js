const express = require('express');
const {
	port,
	host,
	root
} = require('./config.json');
const Router = require('./router');

let app = express();
app.use(express.static(root));
app.use(Router);

app.listen(port, () => {
	console.log(`the server is running at ${port} port!`);
});
