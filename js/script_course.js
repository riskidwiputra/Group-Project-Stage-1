   
import getData from "./getdata.js";
let data        =  await getData.getDataKategory();
console.log(data);
let articel = ``;
data.forEach((item,keys) => {
  articel += `<div class="col-lg-4">
  <div class="categories_post">
      <img src="${item.image}" width="360px" height="220px" alt="post">
      <div class="categories_details">
          <div class="categories_text">
              <a href="artikel.html?id=${item.id_articel}"><h5>${item.judul}</h5></a>
          </div>
      </div>
  </div>
</div>`;
});
document.getElementById("article").innerHTML = articel;



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

