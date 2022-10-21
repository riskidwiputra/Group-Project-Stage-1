   
    import getData from "./getdata.js";

    let dataUser =  await getData.getDataUsers();

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

    document.querySelector('.login-form').addEventListener('submit',(e) => {
        e.preventDefault();

        let email       = document.getElementById("email").value;
        let password    = document.getElementById("input-password").value;
        
        let check = dataUser.filter(e => e.email == email || e.password == password);

        if(check.length >= 1){
            
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password anda salah!',
            })
        }
       
    })
    