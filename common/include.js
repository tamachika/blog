fetch("../header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = "header.html";
  });



fetch("./common/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = "./common/sidebar.html";
  });


fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
