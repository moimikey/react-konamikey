# react-konamikey

Trigger a callback function on anything with a sequence of key presses.

## Install

```bash
yarn add react-konamikey
```

## Usage
```jsx
import Konami from 'react-konamikey'
```

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

## Examples

### attach to an element using `refFn`

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

## License

MIT