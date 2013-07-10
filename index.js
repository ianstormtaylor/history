
/**
 * Get the current path.
 *
 * @return {String}
 */

exports.get = function () {
  return window.location.pathname;
};


/**
 * Push a new `url` on to the history.
 *
 * @param {String} url
 */

exports.push = function (url) {
  window.history.pushState(null, null, url);
};


/**
 * Replace the current url with a new `url`.
 *
 * @param {String} url
 */

exports.replace = function (url) {
  window.history.replaceState(null, null, url);
};


/**
 * Move back in the history, by an optional number of `steps`.
 *
 * @param {Number} steps (optional)
 */

exports.back =
exports.backward = function (steps) {
  steps || (steps = 1);
  window.history.go(-1 * steps);
};


/**
 * Move forward in the history, by an optional number of `steps`.
 *
 * @param {Number} steps (optional)
 */

exports.forward = function (steps) {
  steps || (steps = 1);
  window.history.go(steps);
};