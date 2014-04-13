$(document).ready(function() {
	qrcode.callback = showInfo;

  $('input').change(function(){
  	// Get the first File in the FileList property of <input type="file">
		var imageFile = $('input').prop('files')[0];

		// FileReader API
		// https://developer.mozilla.org/en-US/docs/Web/API/FileReader.readAsDataURL
		var reader = new FileReader();

		reader.onloadend = function () {
			var preview = $('#preview');
			preview.src = reader.result;

    	var img = new Image();
    	img.src = reader.result;

    	img.onload = function() {
    		// Pixastic.process(img, "desaturate", {average : false});
    		Pixastic.process(img, "desaturate", {average : false}, function(bwImg) {
    			console.log('Completed desaturation');
    			// console.log(bwImg);
    			Pixastic.process(bwImg, "blurfast", {amount:0.2}, function(blurredBwImg) {
    				console.log('Completed blur');
    				// console.log(blurredBwImg);

					  qrcode.decode(blurredBwImg);
    			});
    		});
  		}

		reader.readAsDataURL(imageFile);
	});
});

// show info from qr code
function showInfo(data) {
	$("#qrContent p").text(data);

	// Optionally use these lines to redirect:
	// var redirectUrl = data;
	// window.location = redirectUrl;
}