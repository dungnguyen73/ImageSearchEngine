const Accesskey = "M4N87wUPt6g3mey0iKlCgOsH4MYAkDHjFP-xYnhfLbA";
const searchBox = document.getElementById("search-box");
const searchForm = document.getElementById("search-form");
const searchResult = document.getElementById("search-result");
const Morebtn = document.getElementById("show-more") ;
let keyword = "";
let page =1;

async function searchImg(){
    keyword = searchBox.value;
    const Imgurl = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Accesskey}`;

    const response = await fetch(Imgurl);
    const data = await response.json();
    const results = data.results;


    if(page===1){ //clear the previous results for the current displayed results
        searchResult.innerHTML = "";
        Morebtn.style.display = "none"
    }
    results.map((result) => {  //for each pictures
        const image = document.createElement("img");
        image.src = result.urls.regular; // large image size improves image quality- such as result.urls.regular or result.urls.full
        const imageLink  = document.createElement("a"); // link to the image if clicking on it
        imageLink.href= result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    Morebtn.style.display = "block"
    // console.log(results);
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    searchImg();
})

Morebtn.addEventListener('click', ()=>{
    page++;
    searchImg();
})