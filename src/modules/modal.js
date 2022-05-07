import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = modal.querySelector(".popup-content");
  let letIdInterval;

  const modalAnimateOpen = () => {
    animate({
      duration: 200,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        popupContent.style.opacity = progress;
        popupContent.style.transform = "scale(" + progress + ")";
      },
    });
  };
  const modalAnimateClose = () => {
    modal.style.display = "none";
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
      modalAnimateOpen();
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modalAnimateClose();
    }
  });
};

export default modal;
