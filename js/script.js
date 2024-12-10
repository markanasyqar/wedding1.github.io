const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const statusText = document.getElementById('status');
const vinyl = document.getElementById('vinyl');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '&#10074;&#10074;';
        vinyl.style.animation = 'spin 6s linear infinite'; 
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '&#9658;'; 
        vinyl.style.animation = 'none';
    }
}


document.getElementById("btn-open-invitation").addEventListener("click", function() {
    document.getElementById('content').classList.add('fade-out');

    setTimeout(function() {

        document.getElementById("awal").style.display = 'none';
        

        document.getElementById("home").style.display = 'block';

        document.getElementById("home").style.backgroundColor = 'transparent'; 
    }, 1000);
});

document.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.parallax-img');
    const scrollPosition = window.pageYOffset;

    images.forEach((img, index) => {
        // Efek parallax dengan pergeseran yang lebih besar pada gambar lebih jauh ke belakang
        const speed = (index + 1) * 0.5; // Mengatur kecepatan efek untuk setiap gambar
        img.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

function toggleGuestInput(isAttending, buttonId) {
    const guestInput = document.getElementById("guest-input");
    const attendButton = document.getElementById("btn-attend");
    const declineButton = document.getElementById("btn-decline");

    if (isAttending) {
        guestInput.classList.remove("hidden");
    } else {
        guestInput.classList.add("hidden");
    }

    if (buttonId === "btn-attend") {
        attendButton.classList.add("bg-amber-500", "text-white");
        attendButton.classList.remove("bg-gray-200", "text-gray-700");

        declineButton.classList.remove("bg-amber-500", "text-white");
        declineButton.classList.add("bg-gray-200", "text-gray-700");
    } else {
        declineButton.classList.add("bg-amber-500", "text-white");
        declineButton.classList.remove("bg-gray-200", "text-gray-700");

        attendButton.classList.remove("bg-amber-500", "text-white");
        attendButton.classList.add("bg-gray-200", "text-gray-700");
    }
}



let aset8 = document.getElementById('aset8');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;

    aset8.style.top = value * -1 + 'px';
});

var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {

    // Get the current date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Calculate days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the respective elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    // If the countdown is finished, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
}, 1000);