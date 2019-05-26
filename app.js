const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.static("public"));

app.get("/", (req, res) => {
	axios.get('https://contesttrackerapi.herokuapp.com')
		.then(response => {
			res.render("index.ejs", {upcoming: response.data.result.upcoming, ongoing: response.data.result.ongoing});
		})
		.catch(error => { 	
			console.log(error)
	   });
});



app.listen(3000, () => console.log("Server Started"));