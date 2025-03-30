document.querySelectorAll(".draggable").forEach((draggable) => {
    let offsetX = 0, offsetY = 0;

    draggable.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      draggable.setPointerCapture(event.pointerId);

      let startX = event.clientX;
      let startY = event.clientY;

      function onPointerMove(event) {
        offsetX += event.clientX - startX;
        offsetY += event.clientY - startY;
        startX = event.clientX;
        startY = event.clientY;

        draggable.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      function onPointerUp() {
        draggable.releasePointerCapture(event.pointerId);
        draggable.removeEventListener("pointermove", onPointerMove);
        draggable.removeEventListener("pointerup", onPointerUp);
      }

      draggable.addEventListener("pointermove", onPointerMove);
      draggable.addEventListener("pointerup", onPointerUp);
    });
  });