let alarmTime = null;
let alarmTimeout = null;

function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("current-time").textContent = timeString;

  // Check if alarm time matches
  if (alarmTime === timeString) {
    document.getElementById("alarm-audio").play();
    alert("⏰ Wake up! Alarm ringing.");
    clearAlarm();
  }
}

function setAlarm() {
  const input = document.getElementById("alarm-time").value;
  if (!input) {
    alert("Please select a valid time.");
    return;
  }

  const [hour, minute] = input.split(":");
  const formattedTime = new Date();
  formattedTime.setHours(hour);
  formattedTime.setMinutes(minute);

  alarmTime = formattedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("alarm-status").textContent = `Alarm set for ${alarmTime}`;
}

function clearAlarm() {
  alarmTime = null;
  document.getElementById("alarm-status").textContent = "Alarm cleared.";
}

setInterval(updateCurrentTime, 1000);
