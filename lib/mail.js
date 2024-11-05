"use strict";

document.getElementById('contactForm').addEventListener('submit', function (e) {
  var _this = this;
  e.preventDefault(); // Prevent default form submission

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Send data to the server
  fetch('http://localhost:8080/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  }).then(function (response) {
    if (response.ok) {
      alert('Email sent successfully!');
      // Close the modal
      var modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
      modal.hide();
      // Reset the form
      _this.reset();
    } else {
      alert('Error sending email.');
    }
  })["catch"](function (error) {
    console.error('Error:', error);
    alert('Error sending email.');
  });
});