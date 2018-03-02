// https://github.com/kni-labs/rrssb
var popupCenter = function(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : screen.left;
  var dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : screen.top;

  var width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width;
  var height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height;

  var left = width / 2 - w / 2 + dualScreenLeft;
  var top = height / 3 - h / 3 + dualScreenTop;

  var newWindow = window.open(
    url,
    title,
    "scrollbars=yes, width=" +
      w +
      ", height=" +
      h +
      ", top=" +
      top +
      ", left=" +
      left
  );

  // Puts focus on the newWindow
  if (newWindow && newWindow.focus) {
    newWindow.focus();
  }
};


document.querySelectorAll(".popup").forEach(function(el) {
    el.addEventListener("click", function(e) {
      popupCenter(el.getAttribute("href"), "TODO", 580, 470);
      e.preventDefault();
  });
});
