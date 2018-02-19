function WeatherController(){
	// var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(draw);

	function draw(temp,min,max,city) {
		var weatherElem = document.getElementById('weather');
		var template = `
		<div id="weather-shape">
		<div class="row">
			<div class="col-sm-6">
				<i class="fas fa-sun fa-3x"></i>
			</div>
			<div class="col-sm-6">
					<h4>${city}: ${temp}&#176 F</h4>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h6>Low: ${min}&#176 F</h6>
			</div>
				<div class="col-sm-6">
					<h6>High: ${max}&#176 F</h6>
				</div>
		</div>
		</div>
		`
		weatherElem.innerHTML = template;
	}
}
