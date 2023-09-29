let icon = document.getElementById("icon");

let background = document.getElementsByClassName("contact-container");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src = "/Users/biancaosborn/Desktop/codecademy/portfolio_project/Resources/images/sun.png";
        background[0].style.backgroundImage = "url('/Users/biancaosborn/Desktop/codecademy/portfolio_project/Resources/images/purp-img-dark.png')";
    } else{
        icon.src = "/Users/biancaosborn/Desktop/codecademy/portfolio_project/Resources/images/moon-icon.png";
        background[0].style.backgroundImage = "url('/Users/biancaosborn/Desktop/codecademy/portfolio_project/Resources/images/purp-imgs.png')";
    }
}

 