const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");

const temp_val = document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (e)=>{
    e.preventDefault();
     let cityVal = cityName.value;
    if(cityVal == ""){
      city_name.innerText = "Please enter your city name"
    }
    else{
     
      try{
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e5c58a4a27324f6fee1c9043022276fb`;
        const response = await fetch(api);
        const data = await response.json();
        const arrData = [data];
        // console.log(arrData);
        temp_val.innerText = arrData[0].main.temp
        const temp_mood = arrData[0].weather[0].main
        city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

       if(temp_mood == "Clear"){
           temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68'></i>";
       }else if(temp_mood == "Clouds"){
        temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6'></i>";
       }else if(temp_mood == "Rain"){
        temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #a4b0be'></i>";
       }else{
        temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color: #f1f2f6'></i>";
       }
       dataHide.classList.remove("data_hide");
      }
      catch{
        city_name.innerText = "Please enter correct city name"
      }
    }
}

submitBtn.addEventListener("click", getInfo);


const burger = document.querySelector(".burger");

burger.addEventListener("click", ()=>{
  const dataActive = document.querySelector(".data");
  dataActive.classList.toggle("data-active");
});