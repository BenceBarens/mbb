const cursor = document.querySelector('.custom-cursor');

// Laat de cursor de muis volgen
document.addEventListener('mousemove', (e) => {
cursor.style.left = `${e.clientX}px`; // `clientX` = X-positie binnen het scherm
cursor.style.top = `${e.clientY}px`;  // `clientY` = Y-positie binnen het scherm
});


function setCursor(image) {
    cursor.style.backgroundImage = `url('${image}')`;
    cursor.style.opacity = '1'; // Fade-in effect
}

function hideCursor() {
    cursor.style.opacity = '0'; // Fade-out effect
}

// Event Listeners voor de hover elementen
document.getElementById('aboutp1').addEventListener('mouseenter', () => setCursor('../img/ff.png'));
document.getElementById('aboutp2').addEventListener('mouseenter', () => setCursor('../img/koffie.jpg'));
document.getElementById('aboutp3').addEventListener('mouseenter', () => setCursor('../img/hva.jpg'));

// Cursor verbergen als de muis weggaat
document.querySelectorAll('#aboutp1, #aboutp2, #aboutp3').forEach(el => {
    el.addEventListener('mouseleave', hideCursor);
});