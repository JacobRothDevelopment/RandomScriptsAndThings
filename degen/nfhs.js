const AUTO_CLICK_SECONDS = 3;
const ALLOW_DEBUG = false;

window.setInterval(() => {
  var buttons = document.querySelectorAll(
    'button.btn.btnPrimary:not(.disabled)',
  );

  var importantButtons = [];
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === 'Next') {
      importantButtons.push(buttons[i]);
    }
  }

  if (importantButtons.length === 1) {
    importantButtons[0].click();
  } else if (ALLOW_DEBUG) {
    console.log(`number of buttons: ${importantButtons.length}`);
  }
}, AUTO_CLICK_SECONDS * 1000);
