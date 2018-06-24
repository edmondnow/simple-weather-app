// starter variables
var lati, longi;
var tempInC;
var weatherType;

//Changes unit of measurement on click to F.


  var el = document.getElementById("fahrenheit-1");
  temp = document.getElementById("degrees")

  el.addEventListener("click", function() {
  var fahrenheit = Math.round(((tempInC * 9/5 + 32)* 10)/10) + String.fromCharCode(176) + 'F';
  temp.innerHTML = fahrenheit;
  } ) 


//Changes unit of measurement on click to C.

  var c= document.getElementById("celsius-1");
  c.addEventListener("click", function() {
  var celsius = tempInC + String.fromCharCode(176)  + 'C';
  temp.innerHTML = celsius;
  } )
//execute function on page load
 $(document).ready(function getLocation() {
//check if geolocation supported
  if (navigator.geolocation){
    //send position to variables
    navigator.geolocation.getCurrentPosition(function (position){
     lati = position.coords.latitude;
      longi = position.coords.longitude;
      
      //call function to retrieve JSON 
      getData(lati, longi, weatherType);
    });
 } else {
  //if no geolocation available return error  
  x.innerHTML = "Geolocation not supported by this browser!"
 }
}) 

//retrieve json functionand assign text values to html IDs
function getData(lati, longi){
 var urlGet = "https://fcc-weather-api.glitch.me/api/current?lat=" + lati + "&lon=" + longi; 
 $.ajax({
   url: urlGet, success: function (result){
     $("#city").html(result.name);
     tempInC = Math.round(result.main.temp * 10)/10;
     $("#degrees").text(tempInC + String.fromCharCode(176) + 'C');
     $("#desc").text(result.weather[0].main);
 
    var weatherType = result.weather[0].main;
    changeLogo(weatherType);
   }
  
 })

}
  



//Changes logo from font awesome
function changeLogo(weatherType){
if (weatherType == 'Clear'){
$("#image").attr("src","sunny.png");
  } else if(weatherType == 'Clouds'){
$("#image").attr("src","partially-sunny.png");
  } else if(weatherType == 'Rain'){
$("#image").attr("src","rain");
  } else if(weatherType == 'Storm'){
$("#image").attr("src","storm.png");
  } else if(weatherType == 'Snow'){
$("#image").attr("src","snow.png");
  }


}



/* 
To do \
Write down exactly logal and global variables option

*/ 