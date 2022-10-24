   
import getData from "./getdata.js";
var myParam = location.search.split('id=')[1] ? location.search.split('id=')[1] : '1';
let data        =  await getData.getDataArticel(myParam)
document.getElementById("judul-articel").innerHTML = data[0].judul;
document.getElementById("tumpnail").innerHTML = data[0].judul;
document.getElementById("archor").innerHTML = data[0].maker;
document.getElementById("img_src").src = data[0].avatar;
document.getElementById("judul_gambar").src = data[0].image;
document.getElementById("judul").innerHTML = data[0].judul;
document.getElementById("article").innerHTML = data[0].isi;



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
    setTimeout( function(){
        window.location.href = 'login.html'
       })
       alert("Diharapkan login terlebih dahulu")
}
let logout = document.getElementById("logout");
if(logout)logout.addEventListener("click", (event) => {
  localStorage.clear();
  setTimeout( function(){
      window.location.href = 'login.html'
     },1000)
});

