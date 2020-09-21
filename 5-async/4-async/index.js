async function fetchData(url) {
  // <-- start
  //  通过await/async实现异步请求
  // eslint-disable-next-line no-unused-expressions

  const rs = await fetch(url);
  const json = await rs.json();
  if (rs.status === 200) {
    document.writeln(json.name);
  } else {
    console.error(rs.statusText);
  }

  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
