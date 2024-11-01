document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Send data to the server
    fetch('http://localhost:8080/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    .then(response => {
      if (response.ok) {
        alert('Email sent successfully!');
        // Close the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        modal.hide();
        // Reset the form
        this.reset();
      } else {
        alert('Error sending email.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error sending email.');
    });
  });