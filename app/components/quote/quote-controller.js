function QuoteController(){

	var quoteService = new QuoteService();
	var quoteElem = document.getElementById('quote');
	
	quoteService.getQuote(draw);
	
	function draw(quote, author){
		var template = `
		<blockquote cite="${author}">
			<h3>
				${quote}
			</h3>
			<h5 id="author">
				-${author}
			</h5>
		</blockquote>
		`
		quoteElem.innerHTML = template;
	}

}
