const change_page = () => {
  const change_btn = document.getElementById("About-game-btn");
  const header_target = document.getElementById("header");
  const options_target = document.getElementById("options_target");
  const main_btn_before = document.getElementById("main-btn-before");
  //change header//
  change_btn.addEventListener("click", () => {
    if (change_btn.textContent === "SHOW DETAILS") {
      header_target.classList.replace("head-before", "head-after");
      options_target.classList.replace("options", "options-after");
      change_btn.textContent = "HIDE DETAILS";
      main_btn_before.style.display = "block";
    } else {
      header_target.classList.replace("head-after", "head-before");
      options_target.classList.replace("options-after", "options");
      change_btn.textContent = "SHOW DETAILS";
      main_btn_before.style.display = "none";
    }
  });
};

export default change_page;
