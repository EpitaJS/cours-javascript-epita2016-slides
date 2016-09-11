


function createBetterLogger() {

  // à simplifier !!!
  function logBetter(level) {
    let originalArgs = Array.prototype.slice.call(arguments, 1); // because arguments is not an array
    //console.log('originalArgs', originalArgs);

    let prefix = getTimestamp() + ' - ';
    switch(level) {
      case 'log':
        prefix += '😊';
        break;
      case 'info':
        prefix += '😔';
        break;
      case 'warn':
        prefix += '😫';
        break;
      default:
        prefix += '😱';
        break;
    }

    var newArgs = originalArgs.slice();

    if(_.isString(originalArgs[0])) {
      newArgs[0] = prefix + ' ' + newArgs[0];
    }
    else {
      // insert our prefix as 1st arg
      newArgs.unshift(prefix);
    }

    console[level].apply(console, newArgs);
  }


  return {
    log: logBetter.bind(undefined, 'log'),
    info: logBetter.bind(undefined, 'info'),
    warn: logBetter.bind(undefined, 'warn'),
    error: logBetter.bind(undefined, 'error'),
  };

  /*
   return {
   log: console.log.bind(console),
   info: console.info.bind(console),
   warn: console.warn.bind(console),
   error: console.error.bind(console),
   };
   */

  /*
   return {
   log: console.log,
   info: console.info,
   warn: console.warn,
   error: console.error,
   };
   */
}




/** Convert a Javascript date to yyy/mm/dd hh:mm:ss.ms
 *
 * @param {Date} d
 */
function getTimestamp(d) {
  d = d || (new Date());

  let yyyy = d.getFullYear();
  let mm = d.getMonth() + 1; // O-based
  let dd = d.getDate();
  // These lines ensure we have two-digits
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;

  let hh = d.getUTCHours();
  let mn = d.getUTCMinutes();
  let ss = d.getSeconds();
  let mss = d.getMilliseconds();
  // These lines ensure we have two-digits
  if (hh < 10) hh = '0' + hh;
  if (mn < 10) mn = '0' + mn;
  if (ss < 10) ss = '0' + ss;
  if (mss < 10) mss = '00' + mss;
  else if (mss < 100) mss = '0' + mss;

  return `${yyyy}/${mm}/${dd} ${hh}:${mm}:${ss}.${mss}`;
}

