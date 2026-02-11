const customCursor = document.querySelector('.custom-cursor');

if (customCursor) {
    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    function setCursor(image) {
        customCursor.style.backgroundImage = `url('${image}')`;
        customCursor.style.opacity = '1';
    }

    function hideCursor() {
        customCursor.style.opacity = '0';
    }

    document.getElementById('aboutp1')?.addEventListener('mouseenter', () =>
        setCursor('https://bencebarens.nl/img/ff.jpg')
    );
    document.getElementById('aboutp2')?.addEventListener('mouseenter', () =>
        setCursor('https://bencebarens.nl/img/koffie.jpg')
    );
    document.getElementById('aboutp3')?.addEventListener('mouseenter', () =>
        setCursor('https://bencebarens.nl/img/hva.jpg')
    );

    document.querySelectorAll('#aboutp1, #aboutp2, #aboutp3').forEach(el => {
        el.addEventListener('mouseleave', hideCursor);
    });
}