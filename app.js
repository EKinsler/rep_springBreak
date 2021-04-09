"use strict";

/*---------------------------
_____ _____  ______			_____   _____
|____ |____	|_____| \	 /	|____	|____|  
    | |   	|   \    \  /	|   	|  \
____| |____ |    \	  \/	|____  	|   \	

---------------------------*/
const express = require('express');
const { urlencoded } = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send();
  res.sendfile('views/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//app.use(express.bodyParser());

app.get('/getJson', function (req, res) {
   console.log(req.body.example);
});

app.listen(3000, function(){
    console.log('Server running at port 3000: http://127.0.0.1:3000')
});



/////////// SNIPPET FROM RAPID API SITE//////////////
/*---------------------------
	/\	    _____	______
   /  \     ||____|   ||
  /----\    ||		  ||
 /      \   ||    	__||__

 ---------------------------*/

/*req.query({
	"name": [Insert Select Value from select element id "selectCountry"]
});*/

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "covid-19-data.p.rapidapi.com",
	"port": null,
	"path": "/country?name=USA",
	"headers": {
		"x-rapidapi-key": "af92378678msh5ff72bfe15e9a98p1909b3jsna2316d8964e0",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();