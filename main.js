window.onload = function(){

var luck = ["鶏肉","豚肉","牛肉","白身魚","赤身魚", "青魚"];
var colors = ["パスタ","うどん","白米","雑穀米","もち","パン"];
var message, random_luck, random_color;
var btn = document.getElementById("btn");
var output = document.getElementById("output");

btn.onclick = function(){
  random_luck = luck[ Math.floor( Math.random() * luck.length ) ];
  random_color = colors[ Math.floor( Math.random() * colors.length ) ];

  message = "<h2>" + random_luck + "</h2>";
  message += "<p> " + random_color + "</p>";
  output.innerHTML = message;
  
  output.style["background-color"] = random_back_color;ss
}

}