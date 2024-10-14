const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');
const mainGraphic = document.getElementById('main-graphic'); // Get the image element

yesButton.addEventListener('click', () => {
    message.textContent = "From your favorite 😊";
    yesButton.style.transform = 'scale(1.2)'; // Enlarge the yes button
    noButton.style.transform = 'scale(0.5)'; // Shrink the no button
    mainGraphic.src = '/images/blush-smile.png'; // Change to blush image
});

noButton.addEventListener('click', () => {
    message.textContent = "Đừng Như Vậy 😢!";
    yesButton.style.transform = 'scale(1.2)'; // Enlarge the yes button
    noButton.style.transform = 'scale(0.5)'; // Shrink the no button
});
