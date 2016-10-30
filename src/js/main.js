import $ from "jquery";

import { getImages } from "./flickr";
import { mapHTML } from "./map";
import { getNewsData } from "./news";
import { getReservations } from "./reservations"
import { getMenu, menuData, specialNow } from "./menu";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

getNewsData();          //get news data from AJAX request


/////////////////////////////////////
////////////////map/////////////////
/////////////////////////////////////
 var map = $(".box6");  //holds box where map is located on the page
 map.append(mapHTML);     //puts map html on the page





//calls function to get flickr images
getImages();

//call Reservations function to place form on the page
getReservations();

getMenu().then(menuData).then(getMenu).then(specialNow);

/////////////////////////////////////
/////////////////////////////////////
///////menu tab jquery accordian/////
/////////////////////////////////////
function changeTabs(event) {
  // console.log(event);

  if (event.target.id==="tab1") {
    console.log("Hey1");
    $("#storyTab").toggleClass("switchTab");
    $("#menuTab").addClass("switchTab");
    $("#reservationsTab").addClass("switchTab");
    $("#gamesTab").addClass("switchTab");
    }
    if (event.target.id==="tab2") {
      console.log("Hey2");
      $("#menuTab").toggleClass("switchTab");
      $("#storyTab").addClass("switchTab");
      $("#reservationsTab").addClass("switchTab");
      $("#gamesTab").addClass("switchTab");
    }
    if (event.target.id==="tab3") {
      console.log("Hey3");
      $("#reservationsTab").toggleClass("switchTab");
      $("#menuTab").addClass("switchTab");
      $("#storyTab").addClass("switchTab");
      $("#gamesTab").addClass("switchTab");
    }
    if (event.target.id==="tab4") {
      console.log("Hey4");
      $("#gamesTab").toggleClass("switchTab");
      $("#menuTab").addClass("switchTab");
      $("#reservationsTab").addClass("switchTab");
      $("#storyTab").addClass("switchTab");
    }
}
// Shows all div content
// closePara(event);
// document.getElementById("para1").addEventListener("click")
$(".title").click(changeTabs);
