// for arbiter sports clinic
const AUTO_CLICK_SECONDS = 10;

window.setInterval(() => {
  document.querySelector('#play-pause-button[aria-label=play]').click();
}, AUTO_CLICK_SECONDS * 1000);
