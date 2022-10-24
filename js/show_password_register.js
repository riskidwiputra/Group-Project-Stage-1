let show_hide_password = document.getElementById("show_hide_password");

show_hide_password.addEventListener("click", (event) => {
    event.preventDefault();
    let my_eye = document.getElementById("my-eye");
    let show_password = document.getElementById("input-password");
    if(show_password.getAttribute("type") == "text"){
        show_password.setAttribute('type', 'password');
        my_eye.classList.add("fa-eye-slash");
        my_eye.classList.remove("fa-eye");
    }else if(show_password.getAttribute("type") == "password"){
        show_password.setAttribute('type', 'text');
        my_eye.classList.remove("fa-eye-slash");
        my_eye.classList.add("fa-eye");
    }
})


let show_hide_repeaat = document.getElementById("show_hide_repeatpassword");

show_hide_repeaat.addEventListener("click", (event) => {
    event.preventDefault();
    let my_eye2 = document.getElementById("my-eye_");
    let show_password2 = document.getElementById("RepeatPassword");
    if(show_password2.getAttribute("type") == "text"){
        show_password2.setAttribute('type', 'password');
        my_eye2.classList.add("fa-eye-slash");
        my_eye2.classList.remove("fa-eye");
    }else if(show_password2.getAttribute("type") == "password"){
        show_password2.setAttribute('type', 'text');
        my_eye2.classList.remove("fa-eye-slash");
        my_eye2.classList.add("fa-eye");
    }
})