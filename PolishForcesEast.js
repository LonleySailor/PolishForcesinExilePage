function powrotDoGlownej() {
    // Przekierowanie użytkownika do strony głównej
    window.location.href = "index.html";
}
function zmienTryb() {
    document.body.classList.toggle("tryb-ciemny");
    var linki = document.querySelectorAll('a[href]');

    // Iteruj po znalezionych linkach i dodaj klasę "link"
    linki.forEach(function (link) {
        link.classList.toggle('tryb-ciemny');
    });
}

function showContent(id) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.style.display = 'none';

    });

    // Show the selected content section
    var content = document.getElementById(id + '-content');
    content.style.display = 'block';
    document.querySelector('.menu-button').forEach(content => {


    });
}


document.querySelectorAll('.menu-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons
        document.querySelectorAll('.menu-button').forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});








