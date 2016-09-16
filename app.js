var keyCode = {
  left: 'ArrowLeft',
  up: 'ArrowUp',
  right: 'ArrowRight',
  down: 'ArrowDown',
  a: 'a',
  b: 'b'
};
var konamiSequenceIndex = 0;
var konamiSequence = [keyCode.up, keyCode.up, keyCode.down, keyCode.down, keyCode.left, keyCode.right, keyCode.left, keyCode.right, keyCode.b, keyCode.a];

document.addEventListener('keydown', function (evt) {
  if (evt.key !== konamiSequence[konamiSequenceIndex++]) {
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
