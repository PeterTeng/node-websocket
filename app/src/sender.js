WEB_SOCKET_HOST = 'localhost';
WEB_SOCKET_PORT = '9000';
WEB_SOCKET_URL  = `ws://${WEB_SOCKET_HOST}:${WEB_SOCKET_PORT}`;

$(document).ready(function() {
  var webSocket = new WebSocket(WEB_SOCKET_URL);

  webSocket.addEventListener("open", function(event) {
    window.notify_bar("Connected to Socket Server.");
  });

  // Actions on DOM
  $('.send-msg-btn').on("click", function() {
    webSocket.send("Clicked!");

    // Change color on clicking send message button
    $(this).css('background-color', 'rgba(22, 62, 195, 1.0)');
    return setTimeout(function() {
      return $('.send-msg-btn').css('background-color', 'rgba(22, 62, 195, 0.75)');
    }, 250);
  })
});
