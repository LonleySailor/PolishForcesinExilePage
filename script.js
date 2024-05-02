function zmienTryb() {
  document.body.classList.toggle("tryb-ciemny");
  var linki = document.querySelectorAll('a[href]');

  // Iteruj po znalezionych linkach i dodaj klasę "link"
  linki.forEach(function(link) {
    link.classList.toggle('tryb-ciemny');
  });
}

  