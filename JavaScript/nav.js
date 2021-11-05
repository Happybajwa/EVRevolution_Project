function loadMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let oe = document.getElementById("menu");
    xmlhttp.open("GET", "shared-nav.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
}
function hamburgerMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let me = document.getElementById("ham-menu");
    xmlhttp.open("GET", "shared-hamburger-nav.html", false);
    xmlhttp.send();
    me.innerHTML = xmlhttp.responseText;
}

function checkScreenSize()
{
    var width = window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth;
    if(width >= 990)
        {   
        hamburgerMenu();
        }
        else
        {
           loadMenu();
        }
}
window.onresize = checkScreenSize
window.onload = checkScreenSize
