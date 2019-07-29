var express = require('express');
var app = express();
var fs = require("fs");

app.get('/', (req, res) => {
    return res.json({"abc": "cde"});
})


app.get('/api/create', (req, res) => {
	fs.writeFile("helloWorld.txt","hello there", ()=>{})
	return res.json({ success: true })
});

app.listen(3000)