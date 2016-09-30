function request(options) {
  var type = options.type || 'GET';
  var url = options.url;
  var data = JSON.stringify(options.data) || '';

  var request = new XMLHttpRequest();

  request.open(type, url, true);

  if (data) {
    console.log('Setting header ');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }

  request.onload = function() {
    var data = JSON.parse(request.responseText);
    console.log(data);
    if (request.status >= 200 && request.status < 400) {
      // Success!
      console.log(request.responseText);
      options.success(data);

    } else {
      // We reached our target server, but it returned an error
      options.error(data);
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    if (options.error) {
      options.error('connection error');
    }

  };

  request.send(data);
}
