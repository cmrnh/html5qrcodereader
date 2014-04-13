$(document).ready(function() {
	qrcode.callback = showInfo;

  $('input').change(function() {
  	// Get the first File in the FileList property of <input type="file">
		var imageFile = $('input').prop('files')[0];

    canvasResize(imageFile, {
      width: 300,
      height: 0,
      crop: false,
      quality: 80,
     	//rotate: 90,
      callback: function(dataUrl, width, height) {
        document.getElementById('preview').src = dataUrl;

	    	var img = new Image();
	    	img.src = dataUrl;

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
      }
    });
	});
});

// show info from qr code
function showInfo(data) {
	$("#qrContent").html('<p><a href="' + data + '">' + data + '</a></p>');

	// Optionally use these lines to redirect:
	// var redirectUrl = data;
	// window.location = redirectUrl;
}