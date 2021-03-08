var Menu_Button = document.getElementById('Menu_Logo');
var Nav = document.getElementById('Navigation_Menu');
var Close_Nav = document.getElementById('close_option');

//Options on Navigation Menu variables
var Home = document.getElementById('Home_Button');
var News = document.getElementById('News_Button');
var Projects = document.getElementById('Projects_Button');
var Calc = document.getElementById('Calc_Button')
var More = document.getElementById('More_Button');

var Home_Display = document.getElementById('Home_Display');
var News_Display = document.getElementById('News_Display');
var Projects_Display = document.getElementById('Projects_Display');
var Calc_Display = document.getElementById('Calc_Container');
var More_Display = document.getElementById('More_Display');

Menu_Button.addEventListener('mouseenter', function () {
    Menu_Button.style.backgroundImage = "url('./assests/menu_icon_hover.png')";
    Nav.style.marginLeft = "0px";
});

Menu_Button.addEventListener('mouseleave', function () {
    Menu_Button.style.backgroundImage = "url('./assests/menu_icon.png')";
});

Nav.addEventListener('mouseleave', function() {
    Nav.style.marginLeft = '-210px';
});

Menu_Button.addEventListener('click', function () {
    Nav.style.marginLeft = '0px';

    Nav.addEventListener('mouseleave', function () {
        Nav.style.marginLeft = '-210px';
    });
});

Close_Nav.addEventListener('click', function () {
    Nav.style.marginLeft = '-210px';
});

//Option Listeners
Home.addEventListener('click', function () {
    Home_Display.style.visibility = "visible";
    News_Display.style.visibility = "hidden";
    Projects_Display.style.visibility = "hidden";
    Calc_Display.style.visibility = "hidden";
    More_Display.style.visibility = "hidden";

    Nav.style.marginLeft = '-210px';
});

News.addEventListener('click', function () {
    Home_Display.style.visibility = "hidden";
    News_Display.style.visibility = "visible";
    Projects_Display.style.visibility = "hidden";
    Calc_Display.style.visibility = "hidden";
    More_Display.style.visibility = "hidden";

    Nav.style.marginLeft = '-210px';
});

Projects.addEventListener('click', function () {
    Home_Display.style.visibility = "hidden";
    News_Display.style.visibility = "hidden";
    Projects_Display.style.visibility = "visible";
    Calc_Display.style.visibility = "hidden";
    More_Display.style.visibility = "hidden";

    Nav.style.marginLeft = '-210px';
});


Calc.addEventListener('click', function () {
    Home_Display.style.visibility = "hidden";
    News_Display.style.visibility = "hidden";
    Projects_Display.style.visibility = "hidden";
    Calc_Display.style.visibility = "visible";
    More_Display.style.visibility = "hidden";

    Nav.style.marginLeft = '-210px';
});

More.addEventListener('click', function () {
    Home_Display.style.visibility = "hidden";
    News_Display.style.visibility = "hidden";
    Projects_Display.style.visibility = "hidden";
    Calc_Display.style.visibility = "hidden";
    More_Display.style.visibility = "visible";

    Nav.style.marginLeft = '-210px';
});