const listArtikel = document.querySelector("#article-list");
const runningText = document.querySelector("#running-text");
const inputSearch = document.querySelector("#search");
const form = document.querySelector("#form");
const API_URL = "https://6356602b9243cf412f830f06.mockapi.io/articel";


// Article List Start
const getDataArticles = async (URL) => {
  const response = await fetch(URL);
  const articles = await response.json();

  articles.forEach((item, index) => {
    runningText.innerHTML = 
    `<p class="text-sm-center my-auto">
    <marquee scrolldelay="50"></P>
    <p class="text-primary">${item.isi}
    </marquee>
    </p>
    <hr />`;

    listArtikel.innerHTML += 
    `<div class="span8 d-flex">
        <div class="w-25 m-3 mt-0">
          <img src="./img/Seni.jpg" id="img" class="rounded-3 w-100 shadow-sm" alt="" />
        </div>
        <div class="w-100">
          <h4>${item.judul}</h4>
          <p class="text-black-50">${item.kategori},
          <p class="text">${item.isi}</p>
          <div>
            <div class="more label"><a href="#">Read more</a></div>
          </div>
          </hr>
        </div>
      </div>`;
  });
};
const getSearchArticles = async (URL) => {
    const response = await fetch(URL);
    const articles = await response.json();

    articles.forEach((item, index) => {
        let htmlList = `<strong>Menampilkan hasil untuk <span style="color: orange;">${inputSearch.value}</span>  : </strong>    
        <hr />
        <div class="span8 d-flex">
          <div class="w-100">
            <a href=""><b>${item.judul}</b>
          </a>
            <p><a href=""><span>Tanyadokter.com,</span></a><p class="text">${item.isi}</p></p>
            <hr>
          </div>
        </div>`
        html += htmlList;
    });
    listArtikel.innerHTML = html;
  }

getDataArticles(API_URL);



