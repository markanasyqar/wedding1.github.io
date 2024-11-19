const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const statusText = document.getElementById('status');
const vinyl = document.getElementById('vinyl');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;'; // Simbol pause
        vinyl.style.animation = 'spin 6s linear infinite'; // Menambahkan animasi piring hitam
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Simbol play
        vinyl.style.animation = 'none'; // Menghentikan animasi piring hitam
    }
}