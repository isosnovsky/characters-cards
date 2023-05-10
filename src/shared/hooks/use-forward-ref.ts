import { MutableRefObject, RefCallback, useRef } from 'react'

/**
 * Capture ref to use inside component, also forward it outside.
 * @param forwardRef - Incoming ref to forward.
 * @param initialValue - Initial value for inner ref.
 * @returns Ref for inner use and ref-reforwarder.
 */
export function useForwardRef<T = unknown>(
  forwardRef: MutableRefObject<T> | RefCallback<T>,
  initialValue?: T
) {
  const ref = useRef<T>(initialValue)

  const reforwardRef = (currentRef: T) => {
    ref.current = currentRef

    if (forwardRef) {
      if (typeof forwardRef === 'function') {
        forwardRef(currentRef)
      } else {
        forwardRef.current = currentRef
      }
    }
  }

  return [ref, reforwardRef] as const
}
