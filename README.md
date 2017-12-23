# react-konamikey [![CircleCI](https://circleci.com/gh/moimikey/react-konamikey/tree/master.svg?style=svg)](https://circleci.com/gh/moimikey/react-konamikey/tree/master)

Trigger a callback function on anything with a sequence of key presses.

## Install

```bash
# requires react@>=16
yarn add react-konamikey
```

## Usage
```jsx
import * as React from 'react'
import Konami from 'react-konamikey'
// const Konami = require('react-konamikey').default
```

### attach to an element (using `refFn`)

```jsx
<Konami
  element={({ refFn }) => (
    <input type="text" placeholder="gamma" ref={refFn} />
  )}
  payload={() => console.log('KONAMI!!!')}
  sequence={['g', 'a', 'm', 'm', 'a']}
/>
```

### attach to `document`

```jsx
<Konami
  element={document}
  payload={() => console.log('KONAMI!!!')}
  sequence={['a', 'b', 'c']}
>
  <div>hello world</div>
</Konami>
```

### live example

https://www.webpackbin.com/bins/-L1-29LWQ5A4r6O6cveW

## Props

### element

Type: _HTMLElement_ | _Function_

An HTMLElement, document, or function to attach `keydown` event handlers to.

### payload

Type: _Function_

A payload function to execute, once the Konami sequence has been fulfilled.

### sequence

Type: _Array [required]_

An array of strings representing key names.


## License

MIT