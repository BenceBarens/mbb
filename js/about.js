const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
cursor.style.left = `${e.clientX}px`;
cursor.style.top = `${e.clientY}px`;
});


function setCursor(image) {
    cursor.style.backgroundImage = `url('${image}')`;
    cursor.style.opacity = '1';
}

function hideCursor() {
    cursor.style.opacity = '0';
}

document.getElementById('aboutp1').addEventListener('mouseenter', () => setCursor('https://bencebarens.nl/img/ff.jpg'));
document.getElementById('aboutp2').addEventListener('mouseenter', () => setCursor('https://bencebarens.nl/img/koffie.jpg'));
document.getElementById('aboutp3').addEventListener('mouseenter', () => setCursor('https://bencebarens.nl/img/hva.jpg'));

document.querySelectorAll('#aboutp1, #aboutp2, #aboutp3').forEach(el => {
    el.addEventListener('mouseleave', hideCursor);
});