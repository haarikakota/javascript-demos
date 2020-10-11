const appKey = "f24f40b1c24505685fce3b8acd0fcffc";
const result = document.getElementById('results')
function formSub(){
    let city = document.getElementById('city');
    let cityVal = city.value;
    console.log(cityVal);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" +cityVal + "&appid=" +appKey;
   $.ajax({
       url : url,
        success: function (results) {
            showResults(results)
        }
    })
    function showResults(result) {
        let box= document.getElementById('box');
        box.style.margin = "10%";
        results.style.display = "block";
        let condition = result.weather[0].description;
        let name = result.name;
        let temp = Math.floor(result.main.temp - 273);
        let main = result.weather[0].main;
        console.log(main);
    if(main == "Thunderstrom"){
            document.body.style.background = "url('https://cdn0.wideopeneats.com/wp-content/uploads/2018/04/shower-during-storm.png')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
        }
        else if(main =="Drizzle" ){
            document.body.style.background = "url('https://thecheesesellerswife.files.wordpress.com/2016/10/drizzle.jpg')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
          }
          else if(main == "Rain"){
              document.body.style.background = "url('https://www.familiesmagazine.com.au/wp-content/uploads/2017/03/rainy-day-activities-feature.jpeg')";
              document.body.style.backgroundSize = "100% 100%";
              document.body.style.overflow = "hidden";
          }
          else if(main == "Snow"){
            document.body.style.background = "url('https://files.opensnow.com/Utah/March_2019/0315_cars.jpg')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
          }
          else if(main == "Clear"){
            document.body.style.background = "url('http://www.livingoceansfoundation.org/wp-content/uploads/2011/05/F_DSC_0323.jpg')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
          }
          else if(main == "Clouds"){
                document.body.style.background = "url('https://cache.desktopnexus.com/thumbseg/2282/2282766-bigthumbnail.jpg')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
          }
           else{
            document.body.style.background = "url('https://cdn.pixabay.com/photo/2018/05/30/19/44/volcanic-3442300_960_720.jpg')";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.overflow = "hidden";
        }
        let humidity = result.main.humidity;
        results.innerHTML = `<h1>${name}<h1>
                              <h3>Weather Condition : ${condition}</h3>
                                 <h3>Temperature : ${temp}°</h3>
                                <h3>Humidity : ${humidity}%</h3>`
    }
}