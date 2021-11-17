window.onresize = checkScreenSize2
window.onload = checkScreenSize
//function for loading Navbar
//Also on screen resize
function loadMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let oe = document.getElementById("menu");
    xmlhttp.open("GET", "/HTML/SharedMenu/shared-hamburger-nav.html", false);
    xmlhttp.send();
    oe.innerHTML = xmlhttp.responseText;
}
//This funtion is for loading reuseable hamburger menu
function hamburgerMenu()
{
    let xmlhttp = new XMLHttpRequest();
    let me = document.getElementById("ham-menu");
    xmlhttp.open("GET", "/HTML/SharedMenu/shared-hamburger-nav.html", false);
    xmlhttp.send();
    me.innerHTML = xmlhttp.responseText;
}
//this function will check screen size and call the init() function to call canvas animation
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
//Canvas animation code
var can, ctx, step = 10, steps = 50;
delay = 20;
function init()
{

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
//function for making animation text from small to big
function TextSmallToBig()
{
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
//reusable footer code
class Footer extends HTMLElement {
    connectedCallback() 
    {
      this.innerHTML = `    
        <footer>            
        <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <a href="https://play.google.com/store" target="blank"><img src="/All-images/HomePage-Images/androidlogo.png"></a>
                         <a href="https://www.apple.com/nz/app-store/" target="blank"><img src="/All-images/HomePage-Images/IOS-APP.svg"></a>
                 </div>
                </div>
                <div class="footer-col-2">
                 <img src="/All-images/HomePage-Images/footerLOGO.png" alt="">
                 <ul>
                     <li><a href="/HTML/home.html">Home</a></li>
                     <li><a href="/HTML/whyev.html">Why EV</a></li>
                     <li><a href="/HTML/petrol&Diesel.html">Petrol & Diesle</a></li>
                     <li><a href="/HTML/climate-impact.html">Climate Impact</a></li>
                     <li><a href="/HTML/News.html">News</a></li>
                     <li><a href="/HTML/aboutus.html">About us</a></li>
                 </ul>
             </div>
             <div class="footer-col-3">
                 <h3>Useful links</h3>
                 <ul>
                     <li><a href="https://driveelectric.org.nz/individuals/ev-models-and-where-to-buy/" target="blank">Electric Vehicles</a></li>
                     <li><a href="https://www.nzta.govt.nz/vehicles/clean-car-programme/clean-car-discount/" target="blank">Goverment Rebate</a></li>
                     <li><a href="https://genless.govt.nz/for-everyone/on-the-move/consider-electric-vehicles/why-buy-an-ev/?gclid=CjwKCAjwiY6MBhBqEiwARFSCPvXzLgKRGMYUXRllaV7OZaZcixvj_Me2bMCu1vg-0P8pDXwReReEnhoC_p0QAvD_BwE" target="blank">EV Benifits</a></li>
                     <li><a href="https://insideevs.com/car-lists/electric-trucks/" target="blank">Electric Trucks</a></li>
                 </ul>
             </div>
             <div class="footer-col-4">
                 <h3>Follow us</h3>
                 <ul>
                     <li><a href="https://www.facebook.com/" target="blank">Facebook</a></li>
                     <li><a href="https://twitter.com/?lang=en" target="blank">Twiter</a></li>
                     <li><a href="https://www.instagram.com/" target="blank">Instagram</a></li>
                     <li><a href="https://www.youtube.com/" target="blank">Youtube</a></li>
                 </ul>
             </div>
            </div>
            <hr>
            <p class="copyright">&#9400; Copyright 2021-This is Student Project by Harpreet Singh</p>
        </div>
    </div>      
        </footer>     
      `;
    }
  }
  customElements.define('main-footer', Footer);