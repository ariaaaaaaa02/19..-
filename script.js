function sayHello() {
  const messages = [
    "You're the best thing that ever happened to me 💖",
    "I love you more than words can say 💕",
    "Thinking of you always makes me smile 😊",
    "You're my sunshine, even on cloudy days☀️",
    "Forever and always, my Cedie 💌"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

function toggleMusic() {
  const music = document.getElementById("loveSong");
  const btn = document.getElementById("musicBtn");

  if (music.paused) {
    music.play();
    btn.textContent = "Pause Music";
  } else {
    music.pause();
    btn.textContent = "Play Music";
  }
}
