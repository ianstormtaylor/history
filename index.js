
/**
 * Get the current path.
 *
 * @return {String}
 */

exports.path = function () {
  return window.location.pathname;
};


/**
 * Get the current state.
 *
 * @return {Object}
 */

exports.state = function () {
  return window.history.state;
};


/**
 * Push a new `url` on to the history.
 *
 * @param {String} url
 * @param {Object} state (optional)
 */

exports.push = function (url, state) {
  window.history.pushState(state, null, url);
};


/**
 * Replace the current url with a new `url`.
 *
 * @param {String} url
 * @param {Object} state (optional)
 */

exports.replace = function (url, state) {
  window.history.replaceState(state, null, url);
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