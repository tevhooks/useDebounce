# use-debounce

> a react hook that helps debounce expensive function calls in functional components.

[![NPM](https://img.shields.io/npm/v/use-debounce.svg)](https://www.npmjs.com/package/use-debounce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @tevhooks/use-debounce
```

## Usage

```jsx
import React, { Component } from 'react'

import useDebounce from '@tevhooks/use-debounce'

const Example = () => {
  const debouncedAPICall = useDebounce({
    fn: makeAPICall,
    wait: 1000
  })

  function makeAPICall(evt) {
    evt.persist()
    return fetch(`/endpoint?search=${evt.target.value}`)
  }

  return (
    <div>
      <input onChange={debouncedAPICall} />
    </div>
  )
}
```

Check out the example folder for more information

## License

MIT © [Tevinthuku](https://github.com/Tevinthuku)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
