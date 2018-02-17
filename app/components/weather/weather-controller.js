function WeatherController(){
	// var wc = this;
	var weatherService = new WeatherService();
	
	weatherService.getWeather(draw);

	function draw(temp,min,max,city) {
		var weatherElem = document.getElementById('weather');
		var template = `
		<div class="row">
			<div class="col-sm-4">
				<i class="fas fa-sun fa-3x"></i>
			</div>
			<div class="col-sm-4">
				<h4>${city}</h4>
			</div>
			<div class="col-sm-4">
				<h4>${temp}</h4>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h6>Low: ${min}</h6>
			</div>
			<div class="col-sm-6">
				<h6>High: ${max}</h6>
			</div>			
		</div>
		`
		weatherElem.innerHTML = template;
	}
}
