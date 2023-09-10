# index.html
in this file we have a heading tag and a button which will perfom action based on click event and than we have a image tag

# index.js
in thiss file we are selecting the elements by their id which is button and image 
then we have added the event listener to the button 
the event listener will perform the task which fetching the data from the API
then we are storing the data into an variable called imageUrl
then we are setting the image source with images 
else if there is nop image than alter txt will be printed which is Random Car Image



<!-- const generateButton = document.getElementById('generate-button');
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
}); -->