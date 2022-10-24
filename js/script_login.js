   
    import getData from "./getdata.js";

    async function dataUser(e) {
    
        e.preventDefault();
        let data        =  await getData.getDataUsers();
        let email       = document.getElementById("email").value;
        let password    = document.getElementById("input-password").value;
        let check = data.filter(e => e.email == email && e.password == password);

        if(check.length >= 1){
            alert("email dan password true")
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password anda salah!',
            })
        }
           
    }

    document.querySelector('.login-form').addEventListener('submit',(e) => {
        dataUser(e);
    })
    