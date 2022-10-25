require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;

const startServer = async () => {
	try {
		app.listen(PORT, () => {
			console.log(`Server has been started at PORT:${PORT}`);
		});
	} catch (error) {
		console.log(`Error: ${error}`);
	}
};

startServer();
