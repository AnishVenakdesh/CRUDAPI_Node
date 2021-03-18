import { createServer } from 'http';
import { Connection, createConnection } from 'typeorm';
import { Server } from './rest/server';
(async function main() {
	try {
		await createConnection();
		//const firstconnection: Connection = await createConnection("default");
		// Init express server
		const app = new Server().app;
		const server = createServer(app);
		
        // Start express server
        var port =8080
		server.listen(port);
		
		server.on('listening', () => {
			console.log('node server is listening on port in '+ port + '');
		});
		server.on('close', () => {
			('Server closed');
		});
	} catch (err) {
		console.log(err);
	}
})();

// import {createConnection} from "typeorm";
// import { createServer } from 'http';
// import { Server } from './rest/server';
// import express from "express";
// createConnection({
// 	name: "default", 
// 	type: "mysql",
// 	host: "localhost",
// 	port: 3306,
// 	username: "root",
// 	password: "",
// 	database: "user",
//     entities: [
//         __dirname + "/entity/*.js"
//     ],
//     synchronize: true,
// }).then(connection => {
//     	// 	const app = new Server().app;
// 		// const server = createServer(app);
		
//         // // Start express server
//         // var port =8080
// 		// server.listen(port);
		
// 		// server.on('listening', () => {
// 		// 	console.log('node server is listening on port in '+ port + '');
// 		// });
// 		// server.on('close', () => {
// 		// 	('Server closed');
// 		// });
// 		const app = express();
// 		app.use(express.json());
// 		var port= 3030
// 		app.listen(port);
// 	console.log("Server Started")
// }).catch(error => console.log(error));