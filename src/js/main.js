import $ from "jquery";
import { mapHTML } from "./map";

import { getNewsData } from "./news";
import { getBarData } from "./menu";



//get news data from AJAX request
function displayNews () {
  var newsHTML = newsTemplate(getNewsData);

  $(".box4").innerHTML(newsHTML);
};






 var map = $(".box6");
// console.log(map);
// conosole.log(mapHTML);
 map.html(mapHTML);
