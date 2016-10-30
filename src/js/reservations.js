import $ from "jquery";

//generates html for the Reservation form
function getReservations () {
  var formHTML = `
    <form class="reservations">
      <label>Name</label><p><input type="text" placeholder="Full Name"></p>
      <label>How Many?</label><p><input type="number" min="1" max="12"></p>
      <label>Date</label><p><input type="date"></p>
      <label>Time</label><p><input type="time" min="16:00:00" max="23:00:00"></p>
      <label>Special Notes</label><p><textarea name="special-req" label="Special Requests" rows="3" cols="40"></textarea></p>
      <button id="button" name="button">Make Reservation</button>
    </form>`;

  $(".content-reservations").append(formHTML);
};

//creates click event for submitting a reservation
function submit (event) {
  event.preventDefault();
  var confirm = `
    <div class="confirmation">Thank you for your reservation! We look forward to seeing you soon.</div`;

  if (event.target.id==="button") {
    $(".content-reservations").html(confirm);
  }
};

$(".content-reservations").click(submit);

export { getReservations };
