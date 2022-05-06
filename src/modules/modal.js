const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  let letIdInterval;

  const modalAnimateOpen = () => {
    let count = -100;
    const move = () => {
      if (screen.width > 768) {
        popupContent.style.marginTop = count + "%";
        count += 5;
        letIdInterval = requestAnimationFrame(move);
        if (count < 0) {
          popupContent.style.marginTop = count + "%";
        } else {
          cancelAnimationFrame(letIdInterval);
          popupContent.style.marginTop = "";
        }
      }
    };
    move();
  };
  const modalAnimateClose = () => {
    let count = 0;
    const move = () => {
      if (screen.width > 768) {
        popupContent.style.marginTop = count + "px";
        count -= 5;
        letIdInterval = requestAnimationFrame(move);
        if (count > -51) {
          popupContent.style.marginTop = count + "px";
        } else {
          cancelAnimationFrame(letIdInterval);
          popupContent.style.marginTop = "";
        }
      }
    };

    move();
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      modalAnimateOpen();
    });
  });
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalAnimateClose();
  });
};

export default modal;
