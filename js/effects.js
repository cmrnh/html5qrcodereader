$(document).ready(function() {
  $('input').change(function(){
  	// Get the first File in the FileList property of <input type="file">
		var imageFile = $('input').prop('files')[0];

		// FileReader API
		// https://developer.mozilla.org/en-US/docs/Web/API/FileReader.readAsDataURL
		var reader = new FileReader();

		reader.onloadend = function () {
			var dataUrl = reader.result;
			$('#preview').attr('src',dataUrl);
    	qrCodeDecoder(dataUrl);
  	}

		reader.readAsDataURL(imageFile);
	});
	
	qrcode.callback = showInfo;
});

// decode the img
function qrCodeDecoder(dataUrl) {
	qrcode.decode(dataUrl);
}

// show info from qr code
function showInfo(data) {
	$("#qrContent p").text(data);
	var redirectUrl = data;
	window.location = redirectUrl;
}