window.onresize = checkScreenSize2
window.onload = checkScreenSize

function loadMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let oe = document.getElementById("menu");
    xmlhttp.open("GET", "/HTML/SharedMenu/shared-hamburger-nav.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
}
function hamburgerMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let me = document.getElementById("ham-menu");
    xmlhttp.open("GET", "/HTML/SharedMenu/shared-hamburger-nav.html", false);
    xmlhttp.send();
    me.innerHTML = xmlhttp.responseText;
}

function checkScreenSize()
{
   checkScreenSize2()
        init()
}

function checkScreenSize2()
{
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(width <= 990)
        {   
            hamburgerMenu();
        }
        else
        {
            loadMenu();
        }

}

var can, ctx, step = 10, steps = 50;
delay = 20;
function init() {

    step = 10,
    steps = 30;
    delay = 20;

can = document.getElementById("MyCanvas");
ctx = can.getContext("2d");
ctx.fillStyle = "#5ea31d";
ctx.font = "6pt Poppins";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
TextSmallToBig();
}
function TextSmallToBig() {
step++;
ctx.clearRect(0, 0, can.width, can.height);
ctx.save();
ctx.translate(can.width / 2, can.height / 2);
ctx.font = step + "pt Helvetica";
ctx.fillText("WELCOME TO EV REVOLUTION NEWS", 0, 0);
ctx.restore();
if (step < steps)
    var t = setTimeout('TextSmallToBig()', 30);
}
