fetch(".header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });



fetch("sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = data;
  });


fetch("/blog/common/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
