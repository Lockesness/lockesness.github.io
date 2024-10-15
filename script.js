const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const question = document.getElementById('question');
const ghost = document.getElementById('ghost');
const spookyMusic = document.getElementById('spooky-music');
const yesSound = document.getElementById('yes-sound');
const noSound = document.getElementById('no-sound');
const playPauseButton = document.getElementById('play-pause-button');

// Play the spooky background music when the page loads
window.onload = () => {
    spookyMusic.play();
};

// Toggle play and pause functionality
playPauseButton.addEventListener('click', () => {
    if (spookyMusic.paused) {
        spookyMusic.play();
        playPauseButton.textContent = "Pause"; // Change button text to "Pause"
    } else {
        spookyMusic.pause();
        playPauseButton.textContent = "Play"; // Change button text to "Play"
    }
});

// Function to stop the background music
function stopBackgroundMusic() {
    spookyMusic.pause(); // Stop the music
    spookyMusic.currentTime = 0; // Reset the music to the start
}

// Event listener for "Yes" button click
yesButton.addEventListener('click', () => {
    stopBackgroundMusic(); // Stop background music
    question.textContent = "Yay! 🎉";
    ghost.src = "images/blush-smile.png"; // Change the ghost to a smiley face
    yesSound.play(); // Play the sound for Yes button
    yesButton.classList.add('enlarging'); // Enlarge the Yes button
    noButton.classList.add('shrinking'); // Shrink the No button
});

// Event listener for "No" button click
noButton.addEventListener('click', () => {
    stopBackgroundMusic(); // Stop background music
    question.textContent = "Oh no! 😢";
    noSound.play(); // Play the sound for No button
    noButton.classList.add('shrinking'); // Shrink the No button further
    yesButton.classList.add('enlarging'); // Enlarge the Yes button further
});
