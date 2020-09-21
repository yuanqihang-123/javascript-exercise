function fetchData(url) {
  // <-- start
  //  通过Fetch API实现异步请求
  return fetch(url).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    return Promise.reject(response.statusText);
  });

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
