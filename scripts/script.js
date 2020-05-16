var switched = 0; // global variable to control the switch between dark and light theme

// Function to change the color theme of index.html
function changeColorTheme() {

    var x;

    if (switched == 0) { // its in default mode

        // Changing html color
        x = document.getElementsByTagName("html");
        x[0].style.backgroundColor = "gray";

        // Changing color of 'fas' class and the text of tooltip
        x = document.getElementsByClassName("fas");
        x[0].style.filter = "invert(100%)";
        x[0].title = "Mudar para modo claro";

        // Changing color of navigation bar
        x = document.getElementsByClassName("flex-container");
        x[0].style.backgroundColor = "black";

        // Changing color os hover in nav bar
        var sheet = window.document.styleSheets[0];
        sheet.insertRule('li.navItem:hover { color: gray; }', sheet.cssRules.length);

        // Changing color of header
        x = document.getElementsByTagName("header");
        x[0].style.backgroundColor = "gray";

        // Changing color of main
        x = document.getElementsByClassName("flex-container");
        x[1].style.backgroundColor = "black";

        // Changing color of items in main
        x = document.getElementsByClassName("scratch-iconImg");
        x[0].src = "images/scratchDark.svg";

        x = document.getElementsByClassName("pet-iconImg");
        x[0].src = "images/petDark.svg";
        x[0].style.border = "1px solid black";

        x = document.getElementsByClassName("about-icon");
        x[0].style.backgroundColor = "#0c3e51";
        x[0].style.border = "1px solid #0c3e51";

        // Change footer color
        x = document.getElementsByTagName("footer");
        x[0].style.backgroundColor = "gray";

        switched = 1;
    }

    else { // its in dark mode

        // Changing html color
        x = document.getElementsByTagName("html");
        x[0].style.backgroundColor = "white";

        // Changing color of 'fas' class and the text of tooltip
        x = document.getElementsByClassName("fas");
        x[0].style.filter = "invert(0%)";
        x[0].title = "Mudar para modo escuro";

        // Changing color of navigation bar
        x = document.getElementsByClassName("flex-container");
        x[0].style.backgroundColor = "DodgerBlue";

        // Changing color os hover in nav bar
        var sheet = window.document.styleSheets[0];
        sheet.insertRule('li.navItem:hover { color: black; }', sheet.cssRules.length);

        // Changing color of header
        x = document.getElementsByTagName("header");
        x[0].style.backgroundColor = "white";

        // Changing color of main
        x = document.getElementsByClassName("flex-container");
        x[1].style.backgroundColor = "DodgerBlue";

        // Changing color of items in main
        x = document.getElementsByClassName("scratch-iconImg");
        x[0].src = "images/scratch.svg";

        x = document.getElementsByClassName("pet-iconImg");
        x[0].src = "images/pet.svg";
        x[0].style.backgroundColor = "#fff";
        x[0].style.border = "1px solid DodgerBlue";

        x = document.getElementsByClassName("about-icon");
        x[0].style.backgroundColor = "#12adf6";
        x[0].style.border = "1px solid #12adf6";

        // Change footer color
        x = document.getElementsByTagName("footer");
        x[0].style.backgroundColor = "white";

        switched = 0;
    }
}

function login() {

    // Parsing URL parameters
    var mail = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    if(!pass && !mail);

    else if (pass == "admin" && mail == "admin@admin.com") {
        alert("Boas-vindas! :D");
    }
    else
        alert("Sem permissão para entrar no sistema...");
    


}

function afterLogin() {

    // Getting URL parameters
    const params = new URLSearchParams(window.location.search);

    // Checking if URL has the params we need
    if (params.has("email") && params.has("password")) { // it means that user has logged
        var mail = params.get("email");
        var pass = params.get("password");
        document.getElementById("loggedOnly").removeAttribute("hidden");
    }
}