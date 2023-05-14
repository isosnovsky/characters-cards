import { createRef } from 'react'
import { renderHook } from '@testing-library/react'
import { vi } from 'vitest'

import { useForwardRef } from './use-forward-ref'

describe('shared', () => {
  describe('hooks', () => {
    describe('use-forward-ref', () => {
      it('should pass default value', () => {
        const [ref] = renderHook(() => useForwardRef(null, 5)).result.current

        expect(ref.current).toBe(5)
      })

      it('should change ref value with object ref', () => {
        const originRef = createRef()
        const [ref, reforwardRef] = renderHook(() =>
          useForwardRef(originRef, 5)
        ).result.current

        expect(ref.current).toBe(5)
        reforwardRef(10)
        expect(ref.current).toBe(10)
        expect(originRef.current).toBe(10)
      })

      it('should change ref value with function ref', () => {
        const originRef = vi.fn()
        const [ref, reforwardRef] = renderHook(() =>
          useForwardRef(originRef, 5)
        ).result.current

        expect(ref.current).toBe(5)
        reforwardRef(10)
        expect(ref.current).toBe(10)
        expect(originRef).toHaveBeenCalledWith(10)
      })
    })
  })
})
