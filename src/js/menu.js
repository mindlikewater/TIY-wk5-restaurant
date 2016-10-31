import $ from "jquery";

import { FLICKR_ID } from "./api-key";

//global constant to hold main part of API address
var API = "https://json-data.herokuapp.com/restaurant";

//ajax for Daily Special
function getDailySpecial () {
  return $.ajax({
    url: `${API}/special/1`
  });
};

//ajax for menu items: beer, entrees, and videogames
function getMenu () {
  return $.ajax({
    url: `${API}/menu/3`
  });
};

//gets the menu data and stores it in object, barMenu
function menuData (item) {
  var beer = item.Beer;
  var entree = item.entrees;
  var game = item.games;

  var barMenu = {
    beer: beer,
    entree: entree,
    game: game
  }
  //for each property of barMenu, write html for each individual item
  entree.forEach(getEntrees);
  beer.forEach(getBeers);
  game.forEach(getGames);
};

//generate html for each entree
function getEntrees (entree) {

  if (entree.allergies === 1) {
    var allergy = `
      <div class="allergy">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.
        </span>
      </div>`;
  } else {
    allergy = "";
  }
  if (entree.favorite === 1) {
    var fav = `
      <div class="fav">
        <i class="fa fa-heart" aria-hidden="true"></i>
        We have been doing this a long time and this item has become one of our favorites.
        </div>`;
    } else {
    fav = "";
  }
  if (entree.spicy === 1) {
    var spicy = `
      <div class="spicy">
        <span>This item is spicy, please handle with care and drink lots of water.</span>
      </div>`;
  } else {
    spicy = "";
  }
  if (entree.vegan === 1) {
    var vegan = `
      <div class="vegan">
        <i class="fa fa-leaf" aria-hidden="true"></i>
        This item contains no meat and has been prepared without the use of animal products.
      </div>`;
  } else {
    vegan = "";
  }

  var entreeHTML =
  `<div class="menuItem" id=${entree.id}>
    <div class="food">${entree.item}<span class="price">$${entree.price}</span></div>
    <div class="description">${entree.description}</div>
    <div class="hide menu-icons">${allergy} ${fav} ${spicy} ${vegan}</div>
  </div>`;

  //console.log(entreeHTML);
  $(".content-menu").append(entreeHTML);
};

//generate html for each beer
function getBeers (beer) {
  if (beer.allergies === 1) {
    var allergy = `
      <div class="allergy">
        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
        This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.
        </span>
      </div>`;
  } else {
    allergy = "";
  }
  if (beer.favorite === 1) {
    var fav = `
    <div class="fav">
      <i class="fa fa-heart" aria-hidden="true"></i>
      </span>We have been doing this a long time and this item has become one of our favorites.</span>
    </div>`;
  } else {
    fav = "";
  }
  if (beer.draught === 1) {
    var tap = `
    <div class="fav"><img class="beerIcon" id="onTap" src="/images/beerIcon.svg">Currently on tap</div>`;
  } else {
    tap = "";
  }
  var beerHTML =
  `<div class="menuItem" id=${beer.id}>
    <div class="beer">${beer.item} (${beer.abv}% ABV) - ${beer.style}<span class="price">$${beer.price}</span></div>
    <div class="description">${beer.description}</div>
    <div class="hide menu-icons">${allergy} ${fav} ${tap}</div>
  </div>`;

  //console.log(beerHTML);
  $(".beer-menu").append(beerHTML);
};

//generate html for each game
function getGames (game) {
  var gameHTML =
  `<div class="menuItem" id=${game.id} data-favorite=${game.favorite} data-online=${game.online} data-multiplayer=${game.multiplayer}>
    <div class="games">${game.item}<span class="price">$${game.price}</span></div>
    <div class="description">${game.description}</div>
    <div class="description">Console/Device: ${game.platform} Rated: ${game.rating}</div>
  </div>`;

  $(".content-games").append(gameHTML);
};

//generates html for Daily Special
function specialTemplate (pic) {
  //console.log(pic);
  var picSize = pic.sizes.size[3].source;
  //console.log(picSize);
  var picHTML = `<img src="${picSize}">`;
  //console.log(picHTML);
  $(".box5Img").append(picHTML);
};

//send request to flickr's api
function getImage (imageId) {
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
  flickr.then(specialTemplate);
};
//function to get current Daily Special menu item
function specialNow (item) {
  //holds all current entrees
  var allEntrees = item.entrees;
  //console.log(allEntrees);

  //get ajax first, then extract Daily Special ID from data
  getDailySpecial().then(function (food) {
    var dailySpecialID = food.menu_item_id;
    //console.log(dailySpecialID);

    //filter looks through the array until Daily Special ID is found
    var special = allEntrees.filter(function(x) {
      if (x.id === dailySpecialID) {
        var specialHTML = `
          <div class="menuItem" id=${x.id} data-allergies=${x.allergies} data-favorite=${x.favorite} data-spicy=${x.spicy} data-vegan=${x.vegan}>
            <div class="food">${x.item}<span class="price">$${x.price}</span></div>
            <div class="description">${x.description}</div>
          </div>`;

        $(".box5food").append(specialHTML);
      }
    });
  });
};

//holds photo that corresponds with Daily Special
var dailySpecial = [8740955374];
//puts Daily Special photo on the page
dailySpecial.forEach(getImage);


//export functions to main.js
export { getMenu, menuData, specialNow };
