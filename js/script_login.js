   
    import getData from "./getdata.js";

    let dataUser =  await getData.getDataUsers();

    document.querySelector('.login-form').addEventListener('submit',(e) => {
        e.preventDefault();

        let email       = document.getElementById("email").value;
        let password    = document.getElementById("input-password").value;
        
        let check = dataUser.filter(e => e.email == email || e.password == password);

        if(check.length >= 1){
            alert("email dan password true")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password anda salah!',
            })
        }
       
    })
    