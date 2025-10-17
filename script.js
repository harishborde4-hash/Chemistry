const subjects = document.querySelectorAll('.subject');
const iframeContainer = document.querySelector('.iframe-container');
const iframe = document.getElementById('contentFrame');
const backBtn = document.getElementById('backBtn');

// When a card is clicked → open link in iframe
subjects.forEach(section => {
  section.addEventListener('click', () => {
    const url = section.dataset.url;
    iframeContainer.classList.add('active');
    iframe.src = url;
    backBtn.style.display = 'block';
  });
});

// Back button → return to main page
backBtn.addEventListener('click', () => {
  iframeContainer.classList.remove('active');
  iframe.src = '';
  backBtn.style.display = 'none';
});
