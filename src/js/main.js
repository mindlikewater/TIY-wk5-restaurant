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

/*
//send request to flickr's api
function getImages () {
  var flickr = $.ajax({
    url: `https://api.flickr.com/services/rest/`,

    data: {
      method: "flickr.photos.getInfo",
      api_key: FLICKR_ID,
      format: "json",
      photo_id: 30574698245
   }
  });
  flickr.then(console.log);
};

getImages();

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
  console.log(beer);

  beer.forEach(function (beer) {
    var beerHTML =
    `<div class="menuItem" id=${beer.id}>
      <div class="beer">Beer: ${beer.item}> (${beer.abv}% ABV) - ${beer.style}</div>
      <div class="description">Description: ${beer.description}</div>
      <div class="price">$${beer.price}</div>
    </div>`;

    console.log(beerHTML);
    $(".menuTab").append(beerHTML);
  });
};

reqData().then(extractData);
