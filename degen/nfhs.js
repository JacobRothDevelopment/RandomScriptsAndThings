const DEGEN_AUTO_CLICK_SECONDS = 3;
const DEGEN_ALLOW_DEBUG = false;

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
  } else if (DEGEN_ALLOW_DEBUG) {
    console.log(`number of buttons: ${importantButtons.length}`);
  }
}, DEGEN_AUTO_CLICK_SECONDS * 1000);
