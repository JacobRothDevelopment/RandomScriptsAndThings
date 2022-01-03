/*
Step 1) ctrl+c and ctrl+v into the dev console
Step 2) get points
Step 3) ... profit?
?*/

function myMethod() {
  try {
    document
      .getElementsByClassName(
        'ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG'
      )[0]
      .click();
    var today = new Date();
    var time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    console.log('clicked', time);
  } catch {
    // console.log('failed');
  }
}

setInterval(myMethod, 30000);

// ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG hERNRa
// ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG hERNRa
// ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG hERNRa
// ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 jGqsfG irROim
