// function checkNum(){
//     const inpt = document.getElementById("input");
//     if (!inpt.checkValidity()){
//         document.getElementById("success").innerHTML = inpt.validationMessage;
//     }else{
//         document.getElementById("success").innerHTML = "Input OK"
//     }
// }

// const msg = document.getElementById("success");

// function getLocation(){
   
//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPossitionposition);
//     }else{
//        msg.innerHTML = "The location has no been found";
//     }

// }
    
// function showPossitionposition(position){
//     msg.innerHTML = "Latitude: " + position.coords.latitude
//                     + "<br>Longitude: " + position.coords.longitude;
//      localStorage.setItem("pos", pos)
// }




// localStorage.setItem("name", "Max");
// document.getElementById("str").innerHTML = localStorage.getItem("pos")

//localStorage --- sessionStorage
//ramine let   --- dispare let dupa ce inchizi browser

//Request -> server
//XmlHTTP





async function fetchText(){
    let response = await fetch('/dhgdeygyerh');
    let data =- response.text();
    console.log(data);
}
