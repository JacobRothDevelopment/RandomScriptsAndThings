// for arbiter sports clinic
const DEGEN_AUTO_CLICK_SECONDS = 1;
const DEGEN_ALLOW_DEBUG = false;

function degen_debug(label, out) {
  if (DEGEN_ALLOW_DEBUG) {
    console.log(label, out);
  }
}

window.setInterval(() => {
  const timers = document.querySelectorAll('bsk-mediasync-time-display');
  degen_debug('timers', timers);
  const timeElapsed = timers[0].innerText;
  const totalTime = timers[1].innerText;

  if (timeElapsed >= totalTime) {
    const play = document.querySelector(
      '#play-pause-button[aria-label=play]:not(.non-clickable)',
    );

    if (play != null) {
      play.click();
      degen_debug('clicked', play);
    } else {
      degen_debug('nothing to click', '');
    }
  }
}, DEGEN_AUTO_CLICK_SECONDS * 1000);
