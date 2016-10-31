import { mapkey } from "./api-key";


function requestMap () {
  return $.ajax({
    url: `https://json-data.herokuapp.com/restaurant/menu/3`
  });
};


var mapHTML=
`<iframe
src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ86lMh3gE9YgRWFFqMrlgCXE&key=${mapkey}" allowfullscreen></iframe>
<p>777 Peachtree Street</p> <p>Atlanta, GA 30301   <span> 404-999-5555<span></p>`

//<iframe frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ86lMh3gE9YgRWFFqMrlgCXE&key=${mapkey}" allowfullscreen></iframe>

// width="150" height="100" frameborder="0" style="border:0"
export { mapHTML };
