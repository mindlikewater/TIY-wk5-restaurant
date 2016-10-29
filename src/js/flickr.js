import $ from "jquery";

import { FLICKR_ID } from "./api-key";

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

export { getImages };
