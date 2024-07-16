const sortPortfoilo = (target) => {
  let portButton = document.querySelectorAll(".portfolio_menu_button");
  for (let i = 0; i < portButton.length; i++) {
    portButton[i].classList.remove("on");
  }
  document.querySelector(".button_" + target).classList.add("on");

  let portLi = document.querySelectorAll(".portfolio_li");
  if (target === "all") {
    for (let i = 0; i < portLi.length; i++) {
      portLi[i].classList.remove("none");
    }
  } else {
    for (let i = 0; i < portLi.length; i++) {
      portLi[i].classList.add("none");
    }
    let targetLi = document.querySelectorAll(".portfolio_" + target);
    for (let i = 0; i < targetLi.length; i++) {
      targetLi[i].classList.remove("none");
    }
  }
};
