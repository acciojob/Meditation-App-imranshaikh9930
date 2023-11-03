//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById("app");
    const vidContainer = document.querySelector(".vid-container");
    const video = document.querySelector(".vid-container video");
    const playerContainer = document.querySelector(".player-container");
    const soundPicker = document.querySelector(".sound-picker");
    const timeSelectButtons = document.querySelectorAll(".time-select");
    const timeDisplay = document.querySelector(".time-display");
    const playButton = document.querySelector(".play");
    const audio = document.getElementById("audio");
    const rainAudio = document.getElementById("rain-audio");

    let isPlaying = false;
    let selectedTime = 10 * 60; // Initial time in seconds (10 minutes)

    // Function to update the time display
    function updateTimeDisplay() {
        const minutes = Math.floor(selectedTime / 60);
        const seconds = selectedTime % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Event listener for time select buttons
    timeSelectButtons.forEach(button => {
        button.addEventListener("click", () => {
            selectedTime = parseInt(button.id.split("-")[0]) * 60;
            updateTimeDisplay();
        });
    });

    // Event listener for the play/pause button
    playButton.addEventListener("click", () => {
        if (isPlaying) {
            audio.pause();
            rainAudio.pause();
        } else {
            audio.play();
            rainAudio.play();
        }
        isPlaying = !isPlaying;
        playButton.textContent = isPlaying ? "Pause" : "Play";
    });

    // Function to toggle between video and audio
    function toggleMedia(mediaType) {
        if (mediaType === "video") {
            vidContainer.style.display = "block";
            playerContainer.style.display = "none";
            video.play();
            audio.pause();
            rainAudio.pause();
        } else {
            vidContainer.style.display = "none";
            playerContainer.style.display = "block";
            video.pause();
            audio.play();
            rainAudio.play();
        }
    }

    // Initial state (video)
    toggleMedia("video");
    updateTimeDisplay();
});
