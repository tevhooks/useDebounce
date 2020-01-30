import * as React from 'react'

function debounce(wait, func, immediate) {
  var timeout
  return function() {
    var context = this
    var args = arguments
    var later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export default function useDebounce({ fn, wait = 1000 }) {
  return React.useRef(debounce(wait, fn)).current
}
