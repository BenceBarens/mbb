const grid = document.getElementById('image-grid');
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let currentIndex = 0;
    const imageList = [];

    // Voeg de afbeeldingen toe in omgekeerde volgorde (365 t/m 001)
    for (let i = 365; i >= 1; i--) {
      const number = i.toString().padStart(3, '0');
      const src = `https://bencebarens.nl/design/365/images/${number}.jpg`;
      imageList.push(src);

      const index = 365 - i; // om de juiste volgorde te behouden in de array
      const img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      img.alt = `Image ${number}`;
      img.onclick = () => openLightbox(index);
      grid.appendChild(img);
    }

    function openLightbox(index) {
      currentIndex = index;
      lightboxImg.src = imageList[currentIndex];
      lightbox.style.display = "flex";
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % imageList.length;
      lightboxImg.src = imageList[currentIndex];
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
      lightboxImg.src = imageList[currentIndex];
    }

    // Sluit de lightbox bij klik buiten de afbeelding
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });

    // Pijltjestoetsen
    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') lightbox.style.display = 'none';
      }
    });

    let startX = 0;
lightbox.addEventListener('touchstart', e => {
  startX = e.changedTouches[0].screenX;
});

lightbox.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].screenX;
  const deltaX = endX - startX;

  if (Math.abs(deltaX) > 50) {
    if (deltaX < 0) nextImage();     // swipe naar links
    else prevImage();                // swipe naar rechts
  }
});
