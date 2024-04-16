const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

//show popup
showPopupBtn.addEventListener("click", () =>{
    document.body.classList.toggle("show-popup");
});

//hide pop up
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

// function auth(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if(email==email && password==password){
//         window.location.assign("index.html");
//         alert("Login Successful!");
//     }
//     else{
//         alert("Invalid Information");
//         return;
//     }
// }