// for arbiter sports clinic
const AUTO_CLICK_SECONDS = 10;
const ALLOW_DEBUG = false;

window.setInterval(() => {
  const timers = document.querySelectorAll('bsk-mediasync-time-display');
  if (ALLOW_DEBUG) console.log('timers', timers);
  const timeElapsed = timers[0].innerText;
  const totalTime = timers[1].innerText;

  if (timeElapsed >= totalTime) {
    document.querySelector('#play-pause-button[aria-label=play]').click();
  }
}, AUTO_CLICK_SECONDS * 1000);
