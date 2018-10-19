window.notify_bar = function(message, is_error, timeout) {
  var notifierHtml = $('#app-notifier');
  notifierHtml.hide();
  notifierHtml.removeClass("red");

  if (timeout == null) {
    timeout = 3500;
  }

  if (is_error) {
    notifierHtml.addClass("red");
  }

  notifierHtml.html(message);
  notifierHtml.fadeIn(500);

  if (!is_error) {
    return setTimeout(function() {
      return notifierHtml.fadeOut(500);
    }, timeout);
  }
};
