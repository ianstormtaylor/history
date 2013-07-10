
describe('history', function () {

var assert = require('assert')
  , history = require('history');

describe('get', function () {
  it('should return the pathname', function () {
    assert(location.pathname === history.get());
  });
});

describe('push', function () {
  it('should push an entry onto the history', function () {
    history.push('push');
    assert('/push' === history.get());
  });
});

describe('replace', function () {
  it('should replace the current entry in the history', function () {
    history.replace('replace');
    assert('/replace' === history.get());
  });
});

describe('back', function () {
  it('should move backwards', function (done) {
    history.push('1');
    history.push('2');
    assert('/2' === history.get());
    history.back();
    setTimeout(function () {
      assert('/1' === history.get());
      done();
    }, 200);
  });

  it('should move backwards by N steps', function (done) {
    history.push('1');
    history.push('2');
    history.push('3');
    assert('/3' === history.get());
    history.back(2);
    setTimeout(function () {
      assert('/1' === history.get());
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
      assert('/2' === history.get());
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
      assert('/3' === history.get());
      done();
    }, 200);
  });
});

});