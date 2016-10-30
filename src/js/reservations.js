import $ from "jquery";

//generates html for the Reservation form
function getReservations () {
  var formHTML = `
    <form class="reservations">
      <label>Name<input type="text" placeholder="Full Name"></label>
      <label>How Many?<input type="number" min="1" max="12"></label>
      <label>Date<input type="date"></label>
      <label>Time<input type="time" min="16:00:00" max="23:00:00"</label>
      <label>Special Notes<textarea name="special-req" label="Special Requests" rows="3" cols="40"></textarea></label>
      <button id="button" name="button">Make Reservation</button>
    </form>`;

  $(".content-reservations").append(formHTML);
};

//creates click event for submitting a reservation
function submit (event) {
  event.preventDefault();
  var confirm = `
    <div class="confirmation">Thank you for your reservation! We look forward to serve you.</div`;

  if (event.target.id==="button") {
    $(".content-reservations").html(confirm);
  }
};

$(".content-reservations").click(submit);

export { getReservations };
