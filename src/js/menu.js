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
    <span class="entypo-flash">
      Warning: This item may contain shellfish, milk, egg, nuts, soy, wheat, or other commonly allergic item.
    </div>`;
  } else {
    allergy = "";
  }
  if (entree.favorite === 1) {
    var fav = `<div class="fav"><span class="entypo-heart"></span>This is a local favorite!</div>`;
  } else {
    fav = "";
  }
  if (entree.spicy === 1) {
    var spicy = `
    <div class="spicy">
      <img class="icon icons8-Chili-Pepper" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAErklEQVRoQ+2YzW8bRRjGn3dtx4nEhytVFRwQzhUJSMQ1jT/EBaGUuFcOJH8B6Q3RSHFF0xOI9AxVHYkewXYL5QLZdWwKp9ZwoSfiCImiHogDSI299r5oxlnbm3jtndiusZSRoijKeOb5vd9jwpgvGnP9OAUYtQdPPXBSD6zeiTPABhOnAiayyYRRPslZI/NAA+BwMZctH8euvW0UVSFGBpBMR0M1P6IAJQF6vSHcil1dMAwViJEB2CIbIGQICGYuBeo8qxJOIwcQIO0QFmP52oWtlFcv/C8AhNjVO/EkgDVmzq5f0BfHECAaBTSdwcX1BX12bAA++DYa9pnaGsh6g6C92hDOBsAZfw2bvfJhpCH04e34kka46WZt4Y1AjWPdIJ4KAOuBGfi0KM1XNmyxvcS3oNi4uqDH3CCHDsDbgSVYWpKilbAtQoSN36QHIAp5i3X3/jBUAGl5Ih0aXWm3/uWv4yvE+NSbeIDBm+sL+lKn/cMFyAVFV41Aq8fofK3ZYVdvxwwQRRQAXCvT0ABYRwhacE+KJE7QfDVjC/7oq/m/Lt79dYrqPLk1N42956bwbvoXTP9exs5LIdxKvIYzfz9BvLCDml97/OVbr/CVi8YLT9UDnPdHYfn0w7K4SZFqMwSevOnnyUpN/usg6Mfe85N48fG/TX2Pzj2DM/sHaN8z9V2to7GH5wEHgPCCtUzzZkom9WXTtXR2DCtGjgpi8Du+hgegIwwtuOO4krkIohmsVryGv71vk/IYbhKLkGlPVNlPcxMpgN47plYVwMIl+gHNHtJ+3kA8wLnABiwzSTE4XlXOPGi7VhWgjlm6h46Pnb4BZEwzZihirkir6whTDCVbLhsTImwOHywAdizghuk9hBi7VECzCR79YP8AstazQZGqGIdF2CRhVVM2hPwbtNa8+F4duNuoQJ4W4zoVII0zlCTmXJDBnKFoNSFrPwUfgDhnl81jYfSZCexanrTLTSam6aeWR/v2gBgPKGY241ECSNNDdNowSLo7R5GKLHuOhrbHwCdV7+KBLOXR9XGjFEINMYGkHe9SoBEsgfCyU5V13bHHhvymBvxY9w7AiFFBGsZ1qQGIagMq2/F+GPMZgN5x3HBkdJBeGoL1xZ1qAMZEGYSNIwDOJBWntg1vvD2xCKY0vjCBh55jfx8+hMlwluW+kriVjOyYa5oC209nzoCry4BI6ok0HvIMbimUTiBBeTSHv4GEUBOAUaJoZdo+lLeDK+g22x8A+LgCiN/eluvYMCAPyMC7JB4oEqqupV1fVkL051Xgz9a3iD0YlMQr5YDrWOCm6BEDN6pDs7x9reckVgIQ3XarpiI+Cx+WvCTtiRtZx2Q9epqYc76vAyWFamMh6TZpekkZ7x5wG43FLffrwH1LRbjo3DlYWHGbMr2I95wDjkojGtI+A78x8IelUtsbmhi7ICQpD89f4J6ojPIc3gewiGfpLAhn8Q93fFR7tRSALIDMoIT3TGI+LxuJc0RQUHu4NQsLBurIdJso1Y9tfaJrDvCcfEjbPyEQWg8TR+fFz4Bs+0UwxHBX7DWE9SO6/bOek3hQFw76nFOAQVtU9bxTD6habND7x94D/wFkeARP6axjgwAAAABJRU5ErkJggg==" width="48" height="48">
      Warning: Too hot to handle!
    </div>`;
  } else {
    spicy = "";
  }
  if (entree.vegan === 1) {
    var vegan = `<div class="vegan"><span class="entypo-leaf"></span>Vegetarian-friendly</div>`;
  } else {
    vegan = "";
  }

  var entreeHTML =
  `<div class="menuItem" id=${entree.id}>
    <div class="food">${entree.item}<span class="price">$${entree.price}</span></div>
    <div class="description">${entree.description}</div>
    <div class="menuIcons">${allergy} ${fav} ${spicy} ${vegan}</div>
  </div>`;

  //console.log(entreeHTML);
  $(".content-menu").append(entreeHTML);
};

//generate html for each beer
function getBeers (beer) {
  if (beer.allergies === 1) {
    var allergy = `
    <div class="allergy">
    <span class="entypo-flash">
      Warning: This item may contain shellfish, milk, egg, nuts, soy, wheat, or other commonly allergic item.
    </div>`;
  } else {
    allergy = "";
  }
  if (beer.favorite === 1) {
    var fav = `<div class="fav"><span class="entypo-heart"></span>This is a local favorite!</div>`;
  } else {
    fav = "";
  }
  if (beer.draught === 1) {
    var tap = `<div class="fav"><img class="beerIcon" id="onTap" src="/images/beerIcon.svg">Currently on tap</div>`;
  } else {
    tap = "";
  }
  var beerHTML =
  `<div class="menuItem" id=${beer.id}>
    <div class="beer">${beer.item} (${beer.abv}% ABV) - ${beer.style}<span class="price">$${beer.price}</span></div>
    <div class="description">${beer.description}</div>
    <div class="menuIcons">${allergy} ${fav} ${tap}</div>
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
