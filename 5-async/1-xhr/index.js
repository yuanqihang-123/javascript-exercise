function fetchData(url, successCallback, errorCallback) {
  const xhr = new XMLHttpRequest();
  // <-- start
  //  通过XMLHttpRequest实现异步请求
  xhr.open('GET', url, true);
  xhr.onload = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
        successCallback(xhr.responseText);
      } else {
        errorCallback(xhr.statusText);
      }
    }
  };
  xhr.send(null);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(
  URL,
  result => {
    document.writeln(JSON.parse(result).name);
  },
  error => {
    console.error(error);
  }
);
