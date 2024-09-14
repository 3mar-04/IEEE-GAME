const About_ooptions = () => {
  //mario
  const Mario_option_btn = document.getElementById("mario-option-btn");
  const Mario_explain = document.getElementById("mario-option-explain");
  //Aim
  const Aim_option_btn = document.getElementById("Aim-option-btn");
  const Aim_explain = document.getElementById("Aim-option-explain");
  //About
  const About_option_btn = document.getElementById("About-option-btn");
  const About_explain = document.getElementById("About-option-explain");
  //Future
  const Future_option_btn = document.getElementById("Future-option-btn");
  const Future_explain = document.getElementById("Future-option-explain");
  //Goal
  const Goal_option_btn = document.getElementById("Goal-option-btn");
  const Goal_explain = document.getElementById("Goal-option-explain");

  //MARIO OPTION FUN
  Mario_option_btn.addEventListener("click", () => {
    if (Mario_option_btn.style.transform === "rotate(90deg)") {
      Mario_option_btn.style.transform = "rotate(0deg)";
      Mario_explain.style.display = "none";
    } else {
      Mario_option_btn.style.transform = "rotate(90deg)";
      Mario_explain.style.display = "block";
    }
  });
  //Aim OPTION FUN
  Aim_option_btn.addEventListener("click", () => {
    if (Aim_option_btn.style.transform === "rotate(90deg)") {
      Aim_option_btn.style.transform = "rotate(0deg)";
      Aim_explain.style.display = "none";
    } else {
      Aim_option_btn.style.transform = "rotate(90deg)";
      Aim_explain.style.display = "block";
    }
  });
  //About OPTION FUN
   About_option_btn.addEventListener("click", () => {
    if (About_option_btn.style.transform === "rotate(90deg)") {
      About_option_btn.style.transform = "rotate(0deg)";
      About_explain.style.display = "none";
    } else {
      About_option_btn.style.transform = "rotate(90deg)";
      About_explain.style.display = "block";
    }
  });
  //Future OPTION FUN
   Future_option_btn.addEventListener("click", () => {
    if (Future_option_btn.style.transform === "rotate(90deg)") {
      Future_option_btn.style.transform = "rotate(0deg)";
      Future_explain.style.display = "none";
    } else {
      Future_option_btn.style.transform = "rotate(90deg)";
      Future_explain.style.display = "block";
    }
  });
  //Goal OPTION FUN
  Goal_option_btn.addEventListener("click", () => {
    if (Goal_option_btn.style.transform === "rotate(90deg)") {
      Goal_option_btn.style.transform = "rotate(0deg)";
      Goal_explain.style.display = "none";
    } else {
      Goal_option_btn.style.transform = "rotate(90deg)";
      Goal_explain.style.display = "block";
    }
  });
};

export default About_ooptions;
