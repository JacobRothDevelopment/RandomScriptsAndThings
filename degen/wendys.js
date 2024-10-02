/*
http://www.talktowendys.com
*/

//#region VARIABLES

const DEGEN_DO_DEBUG = true;
const restaurantNumber = '00007819'; // 8 digits
//                    yyyy  m  d   h   m   s
const year = 2024;
const month = 9; // 1 - 12
const day = 28;
const hours = 9;
const minutes = 56;

//#endregion

//#region CONST

const date = new Date(year, month - 1, day, hours, minutes, 0);

//#endregion

//#region FUNCTIONS

/**
 * console.log if in debug mode
 * @param  {...any} data
 * @returns
 */
function debug(...data) {
  if (!DEGEN_DO_DEBUG) return;
  console.log(...data);
}

/**
 * returns date string in YYYYMMDD format
 * @returns {string}
 */
function getShortDate() {
  const strYear = year.toString();
  const strMonth = year.toString().padStart(2, 0);
  const strDay = year.toString().padStart(2, 0);
  return strYear + strMonth + strDay;
}

//#endregion

const answers = {
  InputStoreNum: {
    value: restaurantNumber,
  },
  Index_VisitDateDatePicker: {
    value: date.toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }), // MM/DD/YYYY
  },
  Index_VisitDateFormattedDate: {
    value: getShortDate(),
  },
  InputHour: {
    value: (date.getHours() % 12 || 12).toString().padStart(2, 0),
  },
  InputMinute: {
    value: date.getMinutes().toString().padStart(2, 0),
  },
  InputMeridian: {
    value: date
      .toLocaleString('en-US', { hour: '2-digit', hour12: true })
      .substring(3, 5),
  },

  'R000078.1': {
    checked: true,
  }, // yes, alexandria pike location

  'R000006.3': {
    checked: true,
  }, // drive thru

  'R000003.5': {
    checked: true,
  }, // satisfaction

  'R000108.1': {
    checked: true,
  }, // who did you order with

  'R000012.5': {
    checked: true,
  }, // speed of service
  'R000014.5': {
    checked: true,
  }, // cleanliness
  'R000008.5': {
    checked: true,
  }, // taste of food
  'R000011.5': {
    checked: true,
  }, // accuracy of order
  'R000013.5': {
    checked: true,
  }, // friendliness
  'R000016.3': {
    checked: true,
  }, // overall value

  'R000017.2': {
    checked: true,
  }, // any problem?

  'R000020.5': {
    checked: true,
  }, // likely to return

  S000024: '', // why highly satisfied

  'R000029.2': {
    checked: true,
  }, // i've been here two days in the past 30 days

  'R000208.2': {
    checked: true,
  }, // no sauced nuggets

  'R000031.1': {
    checked: true,
  }, // ordered burger

  'R000125.2': {
    checked: true,
  }, // not a combo

  'R000126.4': {
    checked: true,
  }, // baconator

  'R000038.3': {
    checked: true,
  }, // age 25 - 34

  'R000039.3': {
    checked: true,
  }, // income

  'R000041.2': {
    checked: true,
  }, // not above and beyond

  '0000': {
    checked: true,
  },
  '0000': {
    checked: true,
  },
};

const keys = Object.keys(answers);
debug('keys', keys);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const answersObject = answers[key];
  const elementProperties = Object.keys(answersObject);
  const element = document.getElementById(key);
  if (element != null) {
    debug('element', element);
    for (let i = 0; i < elementProperties.length; i++) {
      const property = elementProperties[i];
      debug('property', property);
      debug('answersObject[property]', answersObject[property]);
      debug('element[property]', element[property]);
      element[property] = answersObject[property];
    }
  }
}

const surveyLink = document.querySelector('p.ProductSurvey a');
if (surveyLink !== null) {
  surveyLink.click();
}

// var nextButton = document.getElementById('NextButton');
// if (nextButton != null) {
//   nextButton.click();
// }
