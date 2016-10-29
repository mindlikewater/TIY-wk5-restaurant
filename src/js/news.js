import $ from "jquery";

function requestNews () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/news/1`
  });
};

function extractNews (news) {
  var title = news.title;
  var date = news.date_published;
  var id= news.post_id;
  var blog= news.post;


  // return {
  //   title: title,
  //   date: date,
  //   id: id,
  //   blog: blog
  // }
  var newsHTML = `
    <h1>Latest News</h1>
    <div class="newsTitle">
      ${title}
      <span>${date}</span>
    </div>
    <article class="blog">${blog}</article>
    `;
    // console.log("HTML String", newsHTML);
    $(".box4").append(newsHTML);

};
//this is the final function we use
function getNewsData() {
  return requestNews().then(extractNews);
};


export {getNewsData};


//////////////////
function newsTemplate () {

}
