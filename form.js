const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
    status.textContent = 'Please verify you are not a robot.';
    return;
  }

  const formData = new FormData(form);
  formData.append('g-recaptcha-response', recaptchaResponse);

  fetch('https://script.google.com/macros/s/AKfycbx6mgBOQld_mY95WVLTojXo71sOua_4r_niBo1NC-1SxPtJQ54xGxtO-eUuqc31IrdiGQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(text => {
    status.textContent = 'Thanks! Your message has been sent.';
    form.reset();
    grecaptcha.reset(); // Reset reCAPTCHA
  })
  .catch(error => {
    status.textContent = 'Error: ' + error.message;
  });
});
