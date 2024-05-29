function zmienTryb() {
  document.body.classList.toggle("tryb-ciemny");
  var linki = document.querySelectorAll('a[href]');

  // Iteruj po znalezionych linkach i dodaj klasę "link"
  linki.forEach(function(link) {
    link.classList.toggle('tryb-ciemny');
  });
}
document.addEventListener('DOMContentLoaded', function() {
  const generals = document.querySelector('.generals');
  const images = Array.from(generals.querySelectorAll('figure'));
  let currentIndex = 0;

  // Function to show the current image
  function showImage(index) {
      images.forEach((image, i) => {
          if (i === index) {
              image.style.display = 'block';
          } else {
              image.style.display = 'none';
          }
      });
  }

  // Show the first image initially
  showImage(currentIndex);

  // Event listeners for navigation buttons
  document.getElementById('prev').addEventListener('click', () => {
      currentIndex--;
      if (currentIndex < 0) currentIndex = images.length - 1;
      showImage(currentIndex);
  });

  document.getElementById('next').addEventListener('click', () => {
      currentIndex++;
      if (currentIndex >= images.length) currentIndex = 0;
      showImage(currentIndex);
  });
});

  