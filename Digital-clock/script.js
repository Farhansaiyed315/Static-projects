const clock = document.getElementById('clock');

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading 0s if needed (e.g., 09:05:02)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;
  clock.textContent = timeString;
}

// Update clock immediately and every 1 second
updateClock(); 
setInterval(updateClock, 1000);
