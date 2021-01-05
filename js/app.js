// Primeira Função, responsável por Esconder e Mostrar o Robô!

$("#robo1").click(function () {
  $("#boneco1").toggle();
});

// Segunda Função, responsável por Esconder e Mostrar o Robô, agora com JS Nativo!
let robo = document.querySelector("#robo2");
robo.addEventListener("click", function () {
  var x = document.querySelector("#boneco2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

// Terceira Função, responsável por mover nosso Robô para a Direita!
$("#robo3").click(function () {
  $("#boneco3").animate({ right: "150px", top: "150px" });
});

// Quarta Função, responsável por fazer nosso Robô desaparecer!
$("#robo4").click(function () {
  $("#boneco4").fadeToggle("slow");
});

// Quinta Função, responsável por fazer nosso Robô desaparecer e parar com o SLIDE!
$("#robo5").click(function () {
  $("#boneco5").fadeToggle(3000);
});

$("#robo6").click(function () {
  $("#boneco5").stop();
});

// Sexta Função, responsável por fazer nosso Robô aumentar e diminuir!
$("#robo7").click(function () {
  if ($("#boneco7").css("width") == "100px") {
    $("#boneco7").css("width", "80px");
  } else {
    $("#boneco7").css("width", "100px");
  }
});
