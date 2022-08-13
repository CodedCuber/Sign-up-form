let pass1 = document.getElementById("passWord");
let pass2 = document.getElementById("passWordcon");
let inval = document.getElementById("invalid");
let butt = document.getElementById("butt");


butt.addEventListener("click", myFunction);

function myFunction() {
    if(pass1.value != pass2.value) {
        inval.innerHTML = "The passwords must match";
        butt.addEventListener("submit", function(event) {
            event.preventDefault();
            window.history.back();
          }, true);
    }
    else {
        inval.innerHTML = "";
    }
}
