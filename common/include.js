

fetch("common/sidebar.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("sidebar").innerHTML = data;
  });


fetch("./common/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });
