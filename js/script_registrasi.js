   
    import getData from "./getdata.js";

    document.querySelector('.registrasi-form').addEventListener('submit',(e) => {

        e.preventDefault();

        let fullname    = document.getElementById("fullname").value;
        let email       = document.getElementById("email").value;
        let password    = document.getElementById("input-password").value;
        let repeat      = document.getElementById("RepeatPassword").value;

        if(password != repeat){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match.',
            })
            return false;
        } 
        let data = {
            'fullname'  : fullname,
            'email'     : email,
            'password'  : password,
        }
        if(postDataUsers(data) != false){
            Swal.fire(
                'Good job!',
                'Data Anda Berhasil di simpan,silakan login kembali',
                'success'
              )
           setTimeout( function(){
            window.location.href = 'login.html'
           },2000)

        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'anda gagal mendaftar',
            })
        };
     
    });
    async function postDataUsers(data) {
        return await getData.PostDataUsers(data);
    }
    // postDataUsers(data){
        // var url = `${componen}`
        // let data = await RequestService.postRequest(url, $data)

        // return data; 
    // }
    