document.getElementById('add-element-btn').addEventListener('click', function () {
    // Tworzenie nowego elementu div
    const newElement = document.createElement('div');
    newElement.className = 'element';
    newElement.textContent = 'Nowy element';

    // Dodanie nowego elementu do kontenera
    document.getElementById('elements-container').appendChild(newElement);
});
