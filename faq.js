document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
  
      // Close all open answers
      document.querySelectorAll('.faq-answer').forEach(a => {
        if (a !== answer) {
          a.classList.remove('open');
        }
      });
  
      // Toggle clicked answer
      answer.classList.toggle('open');
    });
  });
  