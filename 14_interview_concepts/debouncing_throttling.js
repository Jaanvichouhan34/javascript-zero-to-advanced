/**
 * JavaScript Interview Concept:
 * Debouncing & Throttling
 * ------------------------
 *
 * These are techniques to **control how often a function runs**.
 * Very important in **frontend performance**.
 * Commonly used in React, DOM events, scroll, resize, search input, API calls.
 */

/* =========================
   1. Debouncing
   =========================
   - A function will only execute after a certain delay since the last call.
   - Prevents **unnecessary frequent calls**.
   - Example: Search input autocomplete.
*/

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId); // reset timer if called again
    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Usage example: search box
function fetchResults(query) {
  console.log("Fetching results for:", query);
}

const debouncedFetch = debounce(fetchResults, 500);

// Simulate typing:
debouncedFetch("J");
debouncedFetch("Ja");
debouncedFetch("Jaa");
debouncedFetch("Jaanvi");
// Only "Jaanvi" will trigger fetchResults after 500ms

/*
INTERVIEW POINTS:
- Used to improve performance
- Avoid sending API requests for every keystroke
- React example: onChange in input
*/


/* =========================
   2. Throttling
   =========================
   - A function can only execute once every X milliseconds.
   - Useful for continuous events (scroll, resize).
*/

function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Usage example: scroll event
function onScroll() {
  console.log("Scroll event fired at", new Date().toLocaleTimeString());
}

const throttledScroll = throttle(onScroll, 2000);

// Simulate scroll events: call throttledScroll repeatedly
// It will log at max once every 2 seconds

/*
INTERVIEW POINTS:
- Used to reduce event calls for performance
- Scroll, resize, mousemove
- React example: window.addEventListener('scroll', throttledScroll)
*/


/* =========================
   Real-World MERN Examples
   =========================
1. Search bar in React:
   <input onChange={debounce(handleSearch, 500)} />

2. Infinite scroll:
   window.addEventListener('scroll', throttle(loadMore, 2000));
*/
