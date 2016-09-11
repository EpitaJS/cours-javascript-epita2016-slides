import _ from "lodash";

export default function debounce(callback, waitMs) {
  if (! callback) return;
  waitMs = waitMs || 0;

  let inFlight = false;
  let lastCallMs;
  let lastArgs;
  return function() {
    lastArgs = arguments;
    lastCallMs = Date.now();

    if (inFlight) return;
    inFlight = true;

    function callIfReady() {
      const nowMs = Date.now();
      const remainingMs = (lastCallMs + waitMs) - nowMs;

      if (remainingMs > 0) return setTimeout(callIfReady, remainingMs);

      callback.apply(undefined, lastArgs);
      inFlight = false;
    }

    setTimeout(callIfReady, waitMs);
  };
}
