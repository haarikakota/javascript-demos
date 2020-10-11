const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const result = document.getElementById('results')
function formSub(){
    let city = document.getElementById('city');
    let cityVal = city.value;
    console.log(cityVal);
    console.log(cityVal);
    
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" +cityVal + "&appid=" +appKey;
    httpRequestAsync(url, theResponse);
}
function theResponse(response){
    let jsonObject = JSON.parse(response);
    console.log(jsonObject);
    results.style.display = "block";
    let condition = jsonObject.weather[0].description;
    let name = jsonObject.name;
    let temp = Math.floor(jsonObject.main.temp - 273);
    let humidity = jsonObject.main.humidity;
    results.innerHTML = `<h1>${name}<h1>
                            <h3>Weather Condition : ${condition}</h3>
                            <h3>Temperature : ${temp}°</h3>
                            <h3>Humidity : ${humidity}%</h3>`
}
function httpRequestAsync(url , callback){
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange =() =>{
        if(httpRequest.readyState == 4 && httpRequest.status == 200)
        callback(httpRequest.responseText);
    }
    httpRequest.open("GET" , url, true);
    httpRequest.send();


}