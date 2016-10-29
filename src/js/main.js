import $ from "jquery";

import { FLICKR_ID } from "./api-key";
import { mapHTML } from "./map";
import { getNewsData } from "./news";
import { allDrinksTemplate } from "./template";
//import { getBarData } from "./menu";


//get news data from AJAX request
function displayNews () {
  var newsHTML = newsTemplate(getNewsData);

  $(".box4").innerHTML(newsHTML);
};

//variable holds box where map is located on the page
 var map = $(".box6");

//puts map html on the page
 map.html(mapHTML);

//var dailySpecial = [8740955374];
var photoIDs = [5204333727, 25743961882, 6550198427, 1448346141, 3590345198, 2789016307];

//dailySpecial.forEach(getImages);
photoIDs.forEach(getImages);

function picTemplate (pic) {
  //console.log(pic);
  var picSize = pic.sizes.size[3].source;
  //console.log(picSize);

  var picHTML = `<img src="${picSize}">`;

  //console.log(picHTML);
  $(".box8").append(picHTML);
};

//getImageURL();

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

//calls function to get flickr images data
getImages();

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

  //console.log(barMenu);
  //console.log(beer);

  beer.forEach(function (beer) {
    var beerHTML =
    `<div class="menuItem" id=${beer.id} data-allergies=${beer.allergies} data-favorite=${beer.favorite} data-bottle=${beer.bottle} data-draught=${beer.draught}>
      <div class="beer">Beer: ${beer.item} (${beer.abv}% ABV) - ${beer.style}</div>
      <div class="description">Description: ${beer.description}</div>
      <div class="price">$${beer.price}</div>
    </div>`;

    //console.log(beerHTML);
    $(".menuTab").append(beerHTML);
  });

  entree.forEach(function (entree) {
    var entreeHTML =
    `<div class="menuItem" id=${entree.id} data-allergies=${entree.allergies} data-favorite=${entree.favorite} data-spicy=${entree.spicy} data-vegan=${entree.vegan}>
      <div class="food">Entree: ${entree.item}</div>
      <div class="description">Description: ${entree.description}</div>
      <div class="price">$${entree.price}</div>
    </div>`;

    //console.log(entreeHTML);
    $(".menuTab").append(entreeHTML);
  });

  game.forEach(function (game) {
    var gameHTML =
    `<div class="menuItem" id=${game.id} data-favorite=${game.favorite} data-online=${game.online} data-multiplayer=${game.multiplayer}>
      <div class="games">Games: ${game.item}</div>
      <div class="description">Description: ${game.description}</div>
      <div class="description">Console/Device: ${game.platform} Rated: ${game.rating}</div>
      <div class="price">$${game.price}</div>
    </div>`;

    $(".menuTab").append(gameHTML);
  });
};

reqData().then(extractData);
