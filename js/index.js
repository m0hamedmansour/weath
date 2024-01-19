
let search=document.getElementById("search");

search.addEventListener("input",function(e){

  weathere(e.target.value)

})

let data

async function weathere(temm){
    let sun=  await(await fetch(`https://api.weatherapi.com/v1/forecast.json?key=beaa6830775a4e99910131438220406&q=${temm}&days=3`)).json();
//   console.log(sun);  
   data=sun;
//    console.log(data);
   displaydata();
}


weathere("cairo")



function displaydata(){
    cols=`
    
    <div class="col-lg-4 col-sm-12  g-1 ">
    <div class="d-flex justify-content-between bg-info-subtle rounded-top-1">
    <h2>
    Saturday
    </h2>
    <h2>
    13January

    </h2>
    </div>
    
    <div class="bg-info rounded-bottom-1">
      <h4 class="pt-3 ">${data.location.name}</h4>
      <div class="d-flex justify-content-between w-75 py-3" >
        <h2>${data.current.temp_c} <sup>o</sup>c</h2>
        <img src="https:${data.current.condition.icon}"  width="50" height="50" alt="">
      </div>

      <span class="text-primary d-inline-block pb-2">${data.current.condition.text}</span>

      <div class="d-flex  align-items-center py-2">
        <span><img src="../imges/icon-compass.png" alt=""><span class="ps-1 pe-2"> 20%</span> </span>
        <span><img src="../imges/icon-wind.png" alt=""> <span class="pe-2 ps-1">18km/h </span></span>
        <span><img src="../imges/icon-compass.png" alt=""> <span class="ps-1 pe-1">East</span> </span>
      </div>
    </div>

    </div>

    <div class="col-lg-4 col-sm-12  g-1">
    
    <div class="pb-1 ">
    <div class="d-flex justify-content-center bg-info-subtle rounded-top-1">

      <h3 class=" mt-2">sunday</h3>
    
  </div>
  
  <div class="bg-info rounded-bottom-1">
    <div class="d-flex justify-content-center py-2 pt-2">
      <img src="https:${data.forecast.forecastday[1].day.condition.icon}" class="fit-width" width="30" height="40" alt="">
    </div>
    <h2 class="text-center pt-3">${data.forecast.forecastday[1].day.maxtemp_c} <sup>o</sup>c</h2>
    <span class="text-center pt-3 d-block">${data.forecast.forecastday[1].day.mintemp_c} <sup>o</sup></span>
    <span class="text-primary d-block text-center pt-3 pb-1">${data.forecast.forecastday[1].day.condition.text}</span>
  </div>
   </div>

    </div>

    <div class="col-lg-4 col-sm-12  g-1">
    
    <div class="pb-1 rounded-1 ">
    <div class="d-flex justify-content-center bg-info-subtle rounded-top-1">

      <h3 class=" mt-2">Monday</h3>
    
  </div>
  
  <div class="bg-info rounded-bottom-1">
    <div class="d-flex justify-content-center py-2 pt-2">
      <img src="https:${data.forecast.forecastday[2].day.condition.icon}" class="fit-width" width="30" height="40" alt="">
    </div>
    <h2 class="text-center pt-3">${data.forecast.forecastday[2].day.maxtemp_c}  <sup>o</sup>c</h2>
    <span class="text-center pt-3 d-block">${data.forecast.forecastday[2].day.mintemp_c} <sup>o</sup></span>
    <span class="text-primary d-block text-center pt-3 pb-1">${data.forecast.forecastday[2].day.condition.text}</span>
  </div>
   </div>

    </div>

    
    `

    document.getElementById('div').innerHTML=cols;
}




/*



 
*/ 