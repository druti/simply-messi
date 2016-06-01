var body = document.body,
    html = document.documentElement,
    height = Math.max( body.scrollHeight, body.offsetHeight,
                      html.clientHeight, html.scrollHeight, html.offsetHeight ),
    $content = document.getElementsByClassName('content');

function resizeContent() {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (w > 600) {
    $content[1].style.height = $content[0].offsetHeight + 'px';
  }
}

window.onresize = function () {
  resizeContent();
}

resizeContent();
