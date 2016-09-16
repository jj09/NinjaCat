var keyCode = {
	left: 37,
	up: 38,
  right: 39,
  down: 40,
  a: 65,
  b: 66
};
var konamiSequenceIndex = 0;
var konamiSequence = [keyCode.up, keyCode.up, keyCode.down, keyCode.down, keyCode.left, keyCode.right, keyCode.left, keyCode.right, keyCode.b, keyCode.a];

$(document).on('keydown', function (evt) {
  if (evt.which !== konamiSequence[konamiSequenceIndex++]) {
    konamiSequenceIndex = 0;
    return;
  }
  
  if (konamiSequence.length === konamiSequenceIndex) {
    konamiSequenceIndex = 0;
    document.body.innerHTML += `<div style="position: fixed; bottom: 0; width: 100%;">
        <marquee direction="right" style="align: bottom">
          <img src="https://dl.dropboxusercontent.com/u/6623066/ninjacattrex_transparent.gif" width="200px" />
        </marquee>
      </div>`;
  }
});
