const appKey = "8e01f15df4c441dca3686cc2292f930f";
const result = document.getElementById('results')
const news = {}
function formSub(){

const country = document.getElementById('country');
const countryValue = country.value
const url = `https://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${appKey}`
console.log(url)

 $.getJSON(url , function(data){

     console.log(data)
     news.database = data.articles
     console.log(news.database)
     news.init(news.database)
 })

 news.init = function(data){
     //load the db 
    news.database = data;

     //generate markup
     news.generateMarkup(data)
 }
 
 let box= document.getElementById('box');
        box.style.margin = "6%";
        news.init.style.display = "block";
}
 news.generateMarkup = function (data) {
    var template= data.map((data) => {
         return  `<div class="card mb-3 cards" style="max-width: 1200px">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="${data.urlToImage}" style = "height:270px; width:400px" class="card-img" alt="Image">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text">${data.description}</p>
        <a class="card-text" target="_blank" href="${data.url}">${data.source.name}</a>
        <p class="card-text">${data.publishedAt}</p>
      </div>
    </div>
  </div>
</div>`
     })
    country.value=""
  result.innerHTML = template

 }
 


