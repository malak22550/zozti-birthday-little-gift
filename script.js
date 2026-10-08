const songUrl = "https://open.anghami.com/LfGq1xNs46b";
const playButton = document.getElementById("playButton");
const buttonText = document.getElementById("buttonText");

playButton.addEventListener("click", () => {
  window.open(songUrl, "_blank", "noopener,noreferrer");
  buttonText.textContent = "Opening Anghami...";
  setTimeout(() => {
    buttonText.textContent = "Listen to the song";
  }, 1800);
});
