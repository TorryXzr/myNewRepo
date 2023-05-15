document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".button");
    var circle = document.querySelector(".circle");
  
    button.addEventListener("click", function() {
      var randomColor = getRandomColor();
      circle.style.fill = randomColor;
    });
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  });
  