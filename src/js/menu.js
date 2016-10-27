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

  return {
    beer: beer,
    entree: entree,
    game: game
  }
};

function getBarData() {
  return requestData().then(extractData);
};

export { getBarData };
