function rozwinPasek() {
    var ukryteElementy = document.getElementById("ukryteElementy");
    if (ukryteElementy.style.display === "none") {
      ukryteElementy.style.display = "block";
      
    } else {
      ukryteElementy.style.display = "none";
      
    }
  }
  window.onload = function() {
    rozwinPasek();
    rozwinPasek2();
    rozwinPasek3();
};
function rozwinPasek2(){
  var ukryteElementy = document.getElementById("ukryteElementy1");
  if (ukryteElementy.style.display === "none") {
    ukryteElementy.style.display = "block";
    
  } else {
    ukryteElementy.style.display = "none";
    
  }
}
function rozwinPasek3(){
  var ukryteElementy = document.getElementById("ukryteElementy2");
  if (ukryteElementy.style.display === "none") {
    ukryteElementy.style.display = "block";
    
  } else {
    ukryteElementy.style.display = "none";
    
  }
}

  function powrotDoGlownej() {
    // Przekierowanie użytkownika do strony głównej
    window.location.href = "index.html";
  }
  function zmienTryb() {
    document.body.classList.toggle("tryb-ciemny");
    var linki = document.querySelectorAll('a[href]');
  
    // Iteruj po znalezionych linkach i dodaj klasę "link"
    linki.forEach(function(link) {
      link.classList.toggle('tryb-ciemny');
    });
  }
  
  document.querySelector('.pasek').addEventListener('click', function() {
    var parent = document.querySelector('.parent');
    var pasek = document.querySelector('.pasek');
    var pasek2 = document.querySelector('.pasek2');
    
    // Dodaj klasę 'expanded' do rodzica
    parent.classList.add('expanded');
    
    // Oblicz wysokość rozszerzonego paska
    var expandedHeight = pasek.offsetHeight;
    
    // Przesuń .pasek2 o wysokość rozszerzonego paska
    pasek2.style.top = 'calc(100% + ' + expandedHeight + 'px)';
  });