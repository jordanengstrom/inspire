function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	
	var imageService = new ImageService();

	function getImage() {
		imageService.getImage(draw);
	}

	function draw(url) {
		document.getElementById("body").style.background = `url('${url}')`;
	}

	getImage();
}


