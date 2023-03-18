var christmasDate = new Date("December 25, 2023 00:00:00").getTime();

var getChristmasCountdownTime = setInterval(function() {
    var now = new Date().getTime();
    var timeLeft = christmasDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days + "d";
    document.querySelector(".hours").innerHTML = hours + "h";
    document.querySelector(".minutes").innerHTML = minutes + "m";
    document.querySelector(".seconds").innerHTML = seconds + "s";
}, 1000);