var switched = 0; // global variable to control the switch between dark and light theme

// Function to change the color theme of index.html
function changeColorTheme() {
    
    var x;

    if (switched == 0) { // its default mode

        // Changing color of 'fas' class and the text of tooltip
        x = document.getElementsByClassName("fas");
        x[0].style.filter = "invert(100%)";
        x[0].title = "Mudar para modo claro";

        // Changing color of navigation bar
        x = document.getElementsByClassName("flex-container");
        x[0].style.backgroundColor = "black";

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

        switched = 1;
    }

    else { // its dark mode

        // Changing color of 'fas' class and the text of tooltip
        x = document.getElementsByClassName("fas");
        x[0].style.filter = "invert(100%)";
        x[0].title = "Mudar para modo escuro";

        // Changing color of navigation bar
        x = document.getElementsByClassName("flex-container");
        x[0].style.backgroundColor = "DodgerBlue";

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

        switched = 0;
    }
}