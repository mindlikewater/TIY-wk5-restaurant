import $ from "jquery";

import { FLICKR_ID } from "./api-key";
import { mapHTML } from "./map";
import { getNewsData } from "./news";
import { allDrinksTemplate } from "./template";
//import { getBarData } from "./menu";
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

//get news data from AJAX request
getNewsData();





//variable holds box where map is located on the page
 var map = $(".box6");

//puts map html on the page
 map.html(mapHTML);


//send request to flickr's api
function getImages () {
  var flickr = $.ajax({
    url: `https://api.flickr.com/services/rest/`,

    data: {
      method: "flickr.photos.getInfo",
      api_key: FLICKR_ID,
      format: "json",
      nojsoncallback: 1,
      photo_id: 30574698245
   }
  });
  flickr.then(console.log);
};

getImages();

/*
function reqFlickrData (data) {
 //loop through the results with the following function
 $.each(data.photoset.photo, function(i,item) {

     //build the url of the photo in order to link to it
     var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';

     //turn the photo id into a variable
     var photoID = item.id;
   });
};
Need to re-write this and test for our data
*/

function reqData () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/3`
  });
};

function extractData (data) {
  var beer = data.Beer;
  var entree = data.entrees;
  var game = data.games;

  var barMenu = {
    beer: beer,
    entree: entree,
    game: game
  }

  console.log(barMenu);
  //console.log(beer);

  beer.forEach(function (beer) {
    var beerHTML =
    `<div class="menuItem" id=${beer.id} data-allergies=${beer.allergies} data-favorite=${beer.favorite} data-bottle=${beer.bottle} data-draught=${beer.draught}>
      <div class="beer">Beer: ${beer.item} (${beer.abv}% ABV) - ${beer.style}</div>
      <div class="description">Description: ${beer.description}</div>
      <div class="price">$${beer.price}</div>
    </div>`;

    //console.log(beerHTML);
    $(".content-menu").append(beerHTML);
  });

  entree.forEach(function (entree) {
    var entreeHTML =
    `<div class="menuItem" id=${entree.id} data-allergies=${entree.allergies} data-favorite=${entree.favorite} data-spicy=${entree.spicy} data-vegan=${entree.vegan}>
      <div class="food">Entree: ${entree.item}</div>
      <div class="description">Description: ${entree.description}</div>
      <div class="price">$${entree.price}</div>
    </div>`;

    //console.log(entreeHTML);
    $(".content-menu").append(entreeHTML);
  });

  game.forEach(function (game) {
    var gameHTML =
    `<div class="menuItem" id=${game.id} data-favorite=${game.favorite} data-online=${game.online} data-multiplayer=${game.multiplayer}>
      <div class="games">Games: ${game.item}</div>
      <div class="description">Description: ${game.description}</div>
      <div class="description">Console/Device: ${game.platform} Rated: ${game.rating}</div>
      <div class="price">$${game.price}</div>
    </div>`;

    $(".content-games").append(gameHTML);
  });
};

reqData().then(extractData);







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
