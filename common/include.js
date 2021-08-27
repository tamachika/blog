fetch("./common/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });



fetch("common/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = data;
  });


fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
