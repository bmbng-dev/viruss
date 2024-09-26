const countdownElement = document.getElementById('countdown');
const fixButton = document.getElementById('fix-btn');
const ignoreButton = document.getElementById('ignore-btn');

let countdown = 10;
let prankActive = true;

// Fungsi hitung mundur
const countdownInterval = setInterval(() => {
    if (countdown > 0 && prankActive) {
        countdown--;
        countdownElement.textContent = countdown;
    } else if (countdown === 0 && prankActive) {
        alert("Kerusakan sistem terjadi!");
        countdownElement.textContent = "💀";
        clearInterval(countdownInterval);
    }
}, 1000);

// Tombol untuk memperbaiki (tidak ada aksi sebenarnya)
fixButton.addEventListener('click', () => {
    prankActive = false;
    alert("PRANKKKKKKKK");
    document.body.style.backgroundColor = "#00ff00";
    countdownElement.textContent = "Sistem Aman!";
});

// Tombol untuk abaikan peringatan (menambah efek panik)
ignoreButton.addEventListener('click', () => {
    alert("Anda memilih untuk mengabaikan. Kerusakan sistem akan terjadi!");
    countdown = 3;  // Mempercepat hitung mundur untuk efek panik
});