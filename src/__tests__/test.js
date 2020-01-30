import useDebounce from '..'
import { renderHook, act } from '@testing-library/react-hooks'

describe('', () => {
  it('is truthy', () => {
    expect(useDebounce).toBeTruthy()
  })

  it('it should call the function after a period of time', done => {
    const val = 'Callback'
    function caller(data) {
      expect(data).toEqual(val)
      done()
    }
    const { result } = renderHook(() =>
      useDebounce({
        fn: caller
      })
    )

    const debouncedFn = result.current

    act(() => {
      debouncedFn(val)
    })
  })
})
