import $ from "jquery";

import { getNewsData } from "./news";
import { getBarData } from "./menu";



//get news data from AJAX request
function displayNews () {
  var newsHTML = newsTemplate(getNewsData);

  $(".box4").innerHTML(newsHTML);
};
