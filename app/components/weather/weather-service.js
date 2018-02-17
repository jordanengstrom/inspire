function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (cb) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			console.log("weather info", res);
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// You should probably convert the temperature data
			// Fahrenheit = (9/5) * °Kelvin - 459.67
			var temp = ((9 / 5) * res.main.temp - 459.67).toFixed(2);
			var min = ((9 / 5) * res.main.temp_min - 459.67).toFixed(2);
			var max = ((9 / 5) * res.main.temp_max - 459.67).toFixed(2);
			var city = res.name;

			cb(temp, min, max, city);
		})
	}
}
