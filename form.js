const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('https://script.google.com/macros/s/AKfycbx6mgBOQld_mY95WVLTojXo71sOua_4r_niBo1NC-1SxPtJQ54xGxtO-eUuqc31IrdiGQ/exec', {
    method: 'POST',
    body: formData
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
function doPost(e) {
    try {
      var sheet = SpreadsheetApp.getActiveSheet();
      sheet.appendRow([
        new Date(),
        e.parameter.name,
        e.parameter.email,
        e.parameter.message
      ]);
      return ContentService.createTextOutput("Success")
        .setMimeType(ContentService.MimeType.TEXT);
    } catch (error) {
      return ContentService.createTextOutput("Error: " + error.message)
        .setMimeType(ContentService.MimeType.TEXT);
    }
  }
  
