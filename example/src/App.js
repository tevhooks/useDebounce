import React, { useState } from 'react'
import useDebounce from '@tevhooks/use-debounce'

const App = () => {
  const [counter, setCounter] = useState(0)
  const debouncedStateCall = useDebounce({
    fn: setCounter,
    wait: 1000
  })

  const callExpensiveFn = () => {
    return debouncedStateCall(i => i + 1)
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={callExpensiveFn}>Click Me Many times & then stop for 1 second for me to update the state counter</button>
    </div>
  )
}
export default App
