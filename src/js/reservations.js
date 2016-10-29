import $ from "jquery";

function getReservations () {
  var formHTML = `
    <form class="reservations">
      <label>Name<input type="text" placeholder="Full Name"></label>
      <label>How Many?<input type="number" min="1" max="12"></label>
      <label>Date<input type="date"></label>
      <label>Time<input type="time" min="16:00:00" max="23:00:00"</label>
      <label>Special Notes<textarea name="special-req" label="Special Requests" rows="3" cols="40"></textarea></label>
    </form>`;

  console.log(formHTML);
  $(".content-reservations").append(formHTML);
};


export { getReservations };
