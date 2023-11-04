document
  .querySelectorAll("button")
  .forEach(
    (button) =>
      (button.innerHTML =
        "<div><span>" +
        button.textContent.trim().split("").join("</span><span>") +
        "</span></div>")
  );

function playSound() {
  const sound = document.getElementById("sound");
  sound.play();
}
document.addEventListener("mousedown", playSound);

document.addEventListener("DOMContentLoaded", function () {
  const audio = new Audio("images/Music for website.mp3");
  const musicControl = document.getElementById("musicControl");

  let isPlaying = false;

  musicControl.addEventListener("click", function () {
    if (isPlaying) {
      audio.pause();
      musicControl.textContent = "Music";
    } else {
      audio.play();
      musicControl.textContent = "Stop";
    }
    isPlaying = !isPlaying;
  });
});

$(document).ready(function () {
  const forBtn = $(".for-btn");
  let isVisible = false;
  const headerText = $(".header-text");

  forBtn.hover(
    function () {
      forBtn.stop().animate({ opacity: 1 }, 300);
    },
    function () {
      if (!isVisible) {
        forBtn.stop().animate({ opacity: 0 }, 300);
      }
    }
  );

  $(document).on("keydown", function (event) {
    if (event.key === "d") {
      if (isVisible) {
        forBtn.stop().animate({ opacity: 0 }, 300);
        isVisible = false;
      } else {
        forBtn.stop().animate({ opacity: 1 }, 300);
        isVisible = true;
      }
    }
  });

  forBtn.css("opacity", 0);
  isVisible = false;
});

$(document).ready(function () {
  const audio = new Audio("images/keyboard.wav");

  $(document).on("keydown", function () {
    audio.play();
  });
});
