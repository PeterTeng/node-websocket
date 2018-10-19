$(document).ready(function() {
  var webSocket = new WebSocket('ws://localhost:9000');

  webSocket.addEventListener("open", function(event) {
    window.notify_bar("Connected to Socket Server.");
  });
});
