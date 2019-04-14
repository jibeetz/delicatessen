const fs = require('fs');
const path = require('path');
const util = require('util');
const express = require('express');
const app = express();

const copyFile = util.promisify(fs.copyFile);
const writeFile = util.promisify(fs.writeFile);

const managerPath = path.join(__dirname, '/../manager');
const publicPath = path.join(__dirname, '/../public');

app.use(express.json());

app.use("/manager", express.static(managerPath));
app.use("/public", express.static(publicPath));

app.post('/compile', function (req, res) {

	async function compileData () {

		let timestamp = + new Date()

		await copyFile(managerPath + '/delicatesses.json', managerPath + '/backup/delicatesses-' + timestamp + '.json')

		await writeFile(managerPath + '/delicatesses.json', JSON.stringify(req.body));

		res.send({});
	}
	compileData();
})

var server = app.listen(9595, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})