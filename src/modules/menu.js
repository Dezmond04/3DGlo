const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  const handlMenu = () => {
    menu.classList.toggle("active-menu");
  };
  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".menu") ||
      e.target.classList.contains("close-btn") ||
      !e.target.closest("menu")
    ) {
      handlMenu();
    } else {
      menuItems.forEach((menuItem) => {
        if (e.target === menuItem) {
          handlMenu();
        }
      });
    }
  });
  // menuBtn.addEventListener("click", handlMenu);
  // closeBtn.addEventListener("click", handlMenu);
  // menuItems.forEach((menuItem) =>
  //   menuItem.addEventListener("click", handlMenu)
  // );
};

export default menu;
