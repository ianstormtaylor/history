# history

  A nicer wrapper around the browser's History API. Push, replace, back, forward, etc.

## Installation

    $ component install ianstormtaylor/history

## Example

```js
var history = require('history');

history.push('/one');
history.push('/two');
history.push('/three');
history.back();     // at `/two`
history.back();     // at `/one`
history.forward(2); // at `/three`
history.path();     // "/three"
```

## API

### .path()
  Get the current path. (`window.location.pathname`)

### .state()
  Get the current state. (`window.history.state`)

### .push(path, [state])
  Push the `path` onto the history stack, with an optional `state` object.

### .replace(path, [state])
  Replace the current path with a new `path`, and optional `state` object.

### .back(steps)
  Move backward an optional number of `steps`, defaults to `1`. Aliased to `backward()` for consistency.

### .forward(steps)
  Move forward an optional number of `steps`, defaults to `1`.

## License

  MIT
