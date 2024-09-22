const show_header = () => {
  const mario_button = document.getElementById("mario-button");
  const mario_coin = document.getElementById("ring");
  const header_mario = document.getElementById("header");
  let check = 0;

  mario_button.addEventListener("click", () => {
    if (check == 1) {
      mario_button.style.top = ".2rem";
      mario_button.style.opacity = ".5";
      header_mario.style.height = "0px";
      check = 0;
    } else {
      mario_button.style.top = "6rem";
      mario_button.style.opacity = "1";
      header_mario.style.height = "100px";
      check = 1; 
    }
  });
};

export default show_header;
