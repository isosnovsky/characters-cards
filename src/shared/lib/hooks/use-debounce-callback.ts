import { DependencyList, useRef, useCallback, useEffect } from 'react'

type AnyFunction = (...args: unknown[]) => unknown

/**
 * Apply debounce to given callback.
 * @param callback - Callback to debounce.
 * @param delay - Debounce delay.
 * @param deps - Callback dependencies.
 * @returns Debounced callback.
 */
export function useDebounceCallback<T extends AnyFunction>(
  callback: T,
  delay: number,
  deps: DependencyList
) {
  const timeoutIdRef = useRef<NodeJS.Timeout>()
  const debouncedCallback = useCallback(
    (...args: unknown[]) => {
      clearTimeout(timeoutIdRef.current)

      timeoutIdRef.current = setTimeout(() => {
        callback(...args)
      }, delay)
    },
    [delay, ...deps]
  )

  useEffect(
    () => () => {
      clearTimeout(timeoutIdRef.current)
    },
    [debouncedCallback]
  )

  return debouncedCallback
}
