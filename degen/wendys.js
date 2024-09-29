/*
http://www.talktowendys.com
*/

//#region VARIABLES
// const orderNumber = 3168;
const restaurantNumber = '00007819'; // 8 digits
//                    yyyy  m  d   h   m   s
const date = new Date(2024, 9, 21, 12, 52, 0);
//#endregion

//#region CONST
const visitTypes = {
  dineIn: 'R000006.1',
  carryOut: 'R000006.2',
  driveThru: 'R000006.3',
  delivery: 'R000006.4',
};
//#endregion

const answers = {
  InputStoreNum: restaurantNumber,
  Index_VisitDateDatePicker: date.toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }), // MM/DD/YYYY
  InputHour: date.getHours(),
  InputMinute: date.getMinutes(),
  InputMeridian: date
    .toLocaleString('en-US', { hour: '2-digit', hour12: true })
    .substring(3, 5),

  'R000078.1': true, // yes, alexandria pike location

  'R000006.3': true, // drive thru

  'R000003.5': true, // satisfaction

  'R000108.1': true, // who did you order with

  'R000012.5': true, // speed of service
  'R000014.5': true, // cleanliness
  'R000008.5': true, // taste of food
  'R000011.5': true, // accuracy of order
  'R000013.5': true, // friendliness
  'R000016.3': true, // overall value

  'R000017.2': true, // any problem?

  'R000020.5': true, // likely to return

  S000024: '', // why highly satisfied

  'R000029.2': true, // i've been here two days in the past 30 days

  'R000208.2': true, // no sauced nuggets

  'R000031.1': true, // ordered burger

  'R000125.2': true, // not a combo

  'R000126.4': true, // baconator

  'R000038.3': true, // age 25 - 34

  'R000039.3': true, // income

  'R000041.2': true, // not above and beyond

  '0000': true,
  '0000': true,
};

const keys = Object.keys(answers);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = answers[key];
  const element = document.getElementById(key);
  if (element != null) {
    element.value = value;
  }
}

const surveyLink = document.querySelector('p.ProductSurvey a');
if (surveyLink === null) {
  alert('There is no survey');
} else {
  surveyLink.click();
}
