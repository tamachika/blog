fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });


window.onload = function(){

var luck = ["鶏肉","豚肉","牛肉","白身魚","赤身魚", "青魚"];
var colors = ["パスタ","うどん","白米","雑穀米","もち","パン"];
var message1, message2, random_luck, random_color;
var btn = document.getElementById("btn");
var output = document.getElementById("output");

btn.onclick = function(){
  random_luck1 = luck[ Math.floor( Math.random() * luck.length ) ];
  random_color1 = colors[ Math.floor( Math.random() * colors.length ) ];

  random_luck2 = luck[ Math.floor( Math.random() * luck.length ) ];
  random_color2 = colors[ Math.floor( Math.random() * colors.length ) ];


  message1 = "<h2>" + random_luck1 + "</h2>";
  message1 += "<p> " + random_color1 + "</p>";

  message2 = "<h2>" + random_luck2 + "</h2>";
  message2 += "<p> " + random_color2 + "</p>";

  output.innerHTML = "〜昼飯〜" + message1 + "〜夜飯〜" + message2;

  
  output.style["background-color"] = random_back_color;ss
}

}
