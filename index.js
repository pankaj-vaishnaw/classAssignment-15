const generateButton = document.getElementById('generate-button');
const carImage = document.getElementById('car-image');

generateButton.addEventListener('click', () => {
    fetch('https://api.unsplash.com/photos/random?client_id=NBTsuh7R1c4xBe1PG9GAfL2KirDVnMBM2zf184DJD9w&query=car')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.urls.regular;
            carImage.src = imageUrl;
            carImage.alt = 'Random Car Image';
        })
        .catch(error => {
            console.error('Error fetching random car image:', error);
        });
});