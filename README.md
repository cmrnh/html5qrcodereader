HTML5 QR-code reader - no flash, only html and javascript

A very basic QR-code reader based on:

- jQuery: http://jquery.com/
- QR-code library: https://github.com/LazarSoft/jsqrcode
- Pixastic: https://github.com/jseidelin/pixastic
- CanvasResize: https://github.com/gokercebeci/canvasResize

Designed for use with Mobile Safari (iOS 6+), which does not support getUserMedia.

CanvasResize captures the file upload and resizes it. (HTML5 FileReader API crashes on Safari for images coming from the camera.) To make the image processable by jsqrcode, Pixastic is used to desaturate and blur the image slightly.
