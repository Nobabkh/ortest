const Link = 'http://192.168.0.108:3000';
function httpGetAsynclogin(callback, email, pass) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      try {
        var res = JSON.parse(this.response);
        res = res[0];
        let result = false;
        if (res !== undefined || res !== null) {
          if (res.pass === pass) {
            result = true;
          }
        }
        callback(result);
        xhr.abort();
      } catch (e) {
        console.log('failed');
      }
    }
  });

  xhr.open('GET', Link + '/users?email=' + email);
  xhr.setRequestHeader(
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
  );
  xhr.setRequestHeader('Accept', 'application/json');
  //xhr.setRequestHeader("Connection", "keep-alive");
  // WARNING: Cookies will be stripped away by the browser before sending the request.

  xhr.send();
}
function httpGetAsyncstores(callback) {
  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      try {
        var res = JSON.parse(this.response);
        callback(res);
        xhr.abort();
      } catch (e) {
        console.log('failed');
      }
    }
  });

  xhr.open('GET', Link + '/stores/');
  xhr.setRequestHeader(
    'User-Agent',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
  );
  xhr.setRequestHeader('Accept', 'application/json');
  //xhr.setRequestHeader("Connection", "keep-alive");
  // WARNING: Cookies will be stripped away by the browser before sending the request.

  xhr.send();
}

export {httpGetAsynclogin, httpGetAsyncstores};
