import $ from "jquery";

import { FLICKR_ID } from "./api-key";
import { mapHTML } from "./map";
import { getNewsData } from "./news";
import { getReservations } from "./reservations"
import { allDrinksTemplate } from "./template";
import { getMenu, menuData, specialNow } from "./menu";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

getNewsData();          //get news data from AJAX request

 var map = $(".box6");  //holds box where map is located on the page
 map.html(mapHTML);     //puts map html on the page

//holds array of specific flickr images to include
var photoIDs = [5204333727, 25743961882, 6550198427, 1448346141, 3590345198, 2789016307];

//dailySpecial.forEach(getImages);
photoIDs.forEach(getImages);

//generates html for restaurant photos and puts them on the page
function picTemplate (pic) {
  //console.log(pic);
  var picSize = pic.sizes.size[3].source;
  //console.log(picSize);
  var picHTML = `<img src="${picSize}">`;
  //console.log(picHTML);
  $(".box8").append(picHTML);
};

//send request to flickr's api
function getImages (imageId) {
  var flickr = $.ajax({
    url: `https://api.flickr.com/services/rest/`,

    data: {
      method: "flickr.photos.getSizes",
      api_key: FLICKR_ID,
      format: "json",
      nojsoncallback: 1,
      photo_id: imageId
   }
  });
  flickr.then(picTemplate);
};

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
