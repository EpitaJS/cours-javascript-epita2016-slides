
export default function tryUntil(candidateFnArray, callback) {
  const count = candidateFnArray.length;
  let i = 0;

  function examineResult(err, res) {
    if (res) return callback(null, res);

    if (i > count) return callback(err || new Error('not found !'));

    candidateFnArray[i](examineResult);
    i++;
  }

  examineResult(); // start
}


/** Hints



 */
