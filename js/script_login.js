   
    import getData from "./getdata.js";
    if(localStorage.getItem("is_login")){
        setTimeout( function(){
            window.location.href = 'index.html'
           })
           alert("anda sedang login")
    }
    async function dataUser(e) {
    
        e.preventDefault();
        let data        =  await getData.getDataUsers();
        let email       = document.getElementById("email").value;
        let password    = document.getElementById("input-password").value;
        let check = data.filter(e => e.email == email && e.password == password);
        console.log(check);
        if(check.length >= 1){
            let login = {
                'email'     : check[0].email,
                'fullname'  : check[0].fullname,
                'username'  : check[0].username,
                'alamat'    : check[0].alamat,
                'avatar'    : check[0].avatar
            };
            localStorage.setItem('is_login', JSON.stringify(login));
            Swal.fire(
                'Good job!',
                'Anda Berhasil Login',
                'success'
              )
           setTimeout( function(){
            window.location.href = 'index.html'
           },2000)
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
    