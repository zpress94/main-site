
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  fetch('https://script.google.com/macros/s/AKfycbx6mgBOQld_mY95WVLTojXo71sOua_4r_niBo1NC-1SxPtJQ54xGxtO-eUuqc31IrdiGQ/exec', {
    method: 'POST',
    body: JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      status.textContent = 'Thanks! Your message has been sent.';
      form.reset();
    } else {
      status.textContent = 'Oops! Something went wrong.';
    }
  })
  .catch(error => {
    status.textContent = 'Error: ' + error.message;
  });
});
