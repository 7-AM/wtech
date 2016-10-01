var Utils = (function () {

  function request(options) {
    var type = options.type || 'GET';
    var url = options.url;
    var data = JSON.stringify(options.data) || '';

    var request = new XMLHttpRequest();

    request.open(type, url, true);

    if (data) {
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }

    request.onload = function() {
      var data = JSON.parse(request.responseText);

      if (request.status >= 200 && request.status < 400) {
        // Success
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

  function getParameterByName(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  function createElementLink(label, url) {
    var link      = document.createElement('a');
    var linkText  = document.createTextNode(label);

    link.setAttribute('href', url);
    link.appendChild(linkText);

    return link;
  }

  function createElementButton(label, classBtn, dataId) {
    var button      = document.createElement('button');
    var buttonText  = document.createTextNode(label);

    button.setAttribute('class', classBtn);
    button.setAttribute('type', 'button');
    button.setAttribute('data-id', dataId);
    button.appendChild(buttonText);

    return button;

  }

  return {
    queryString: getParameterByName,
    request: request,
    formatDate: formatDate,
    createElementLink: createElementLink,
    createElementButton: createElementButton
  };

})();
