
describe('history', function () {

var assert = require('assert')
  , history = require('history');

describe('path', function () {
  it('should return the current path', function () {
    assert(window.location.pathname === history.path());
  });
});

describe('state', function () {
  it('should return the current state', function () {
    var obj = { check: true };
    window.history.pushState(obj, null, null);
    assert(true === history.state().check);
  });
});

describe('push', function () {
  it('should push an entry onto the history', function () {
    history.push('push', { method: 'push' });
    assert('/push' === history.path());
    assert('push' === history.state().method);
  });
});

describe('replace', function () {
  it('should replace the current entry in the history', function () {
    history.replace('replace', { method: 'replace' });
    assert('/replace' === history.path());
    assert('replace' === history.state().method);
  });
});

describe('back', function () {
  it('should move backwards', function (done) {
    history.push('1');
    history.push('2');
    assert('/2' === history.path());
    history.back();
    setTimeout(function () {
      assert('/1' === history.path());
      done();
    }, 200);
  });

  it('should move backwards by N steps', function (done) {
    history.push('1');
    history.push('2');
    history.push('3');
    assert('/3' === history.path());
    history.back(2);
    setTimeout(function () {
      assert('/1' === history.path());
      done();
    }, 200);
  });
});

describe('forward', function () {
  it('should move forwards', function (done) {
    history.push('1');
    history.push('2');
    history.back();
    history.forward();
    setTimeout(function () {
      assert('/2' === history.path());
      done();
    }, 200);
  });

  it('should move forwards by N steps', function (done) {
    history.push('1');
    history.push('2');
    history.push('3');
    history.back(2);
    history.forward(2);
    setTimeout(function () {
      assert('/3' === history.path());
      done();
    }, 200);
  });
});

});