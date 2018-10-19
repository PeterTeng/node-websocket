$(document).ready(function() {
  var webSocket = new WebSocket('ws://localhost:9000');

  webSocket.addEventListener("open", function(event) {
    window.notify_bar("Connected to Socket Server.");
  });

  webSocket.addEventListener("message", function(event) {
    console.log('Message from server ', event.data);
  });

  $('.send-msg-btn').on("click", function() {
    webSocket.send("Clicked!");
  })
});
