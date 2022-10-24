
let show = ``;
if(localStorage.getItem("is_login")){
    let data = JSON.parse(localStorage.getItem("is_login"));
    console.log(data);
    show += `<div class="collapse navbar-collapse" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="${data.avatar}" width="40" height="40" class="rounded-circle">
          <span class="nav-link" style="margin-left:10px">${data.fullname}</span>
        </a>
        
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#" id="logout">Log Out</a>
        </div>
      </li>   
    </ul>
  </div>`;
    document.getElementById("is-login").innerHTML = show;
    
}else{
    show += `<li class="nav-item">
    <a class="btn btn-primary" id="button-header" style=" margin-top: 18px;
        padding: 5px 50px 5px 50px;
        background: #2395FE;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        border-radius: 18px;" href="login.html">Masuk</a>
    </li>`;
    document.getElementById("is-login").innerHTML = show;
}
document.getElementById("logout").addEventListener("click", (event) => {
    localStorage.clear();
    setTimeout( function(){
        window.location.href = 'login.html'
       },1000)
});