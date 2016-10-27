import $ from "jquery";

function requestData () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/3`
  });
};

function extractData (data) {
  var beer = data.beer;
  var entree = data.entrees;
  var game = data.games;

  var barMenu = {
    beer: beer,
    entree: entree,
    game: game
  }

  console.log(barMenu);
  return barMenu;
};

function getBarData() {
  return requestData().then(extractData);
};


export { getBarData };
