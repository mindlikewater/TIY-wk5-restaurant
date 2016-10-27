import $ from "jquery";

function requestNews () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/news/1`
  });
};

function extractNews (news) {
  var title = news.title;
  var date = news.date_publised;
  var id= news.post_id;
  var blog= news.post;


  return {
    title: title,
    date: date,
    id: id,
    blog: blog
  }
};
//this is the final function we use
function getNewsData() {
  return requestNews().then(extractNews);
};

export {getNewsData};
