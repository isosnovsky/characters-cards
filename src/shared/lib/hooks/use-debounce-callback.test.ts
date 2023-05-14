import { renderHook } from '@testing-library/react'
import { DependencyList } from 'react'
import { vi } from 'vitest'

import { useDebounceCallback } from './use-debounce-callback'

function renderUseDebounceCallback(delay = 5, deps: DependencyList = []) {
  const fn = vi.fn()

  return [
    fn,
    renderHook(
      ([delay = 5, deps = []]) => useDebounceCallback(fn, delay, deps),
      {
        initialProps: [delay, deps] as const,
      }
    ),
  ] as const
}

describe('shared', () => {
  describe('hooks', () => {
    describe('use-debounce-callback', () => {
      beforeAll(() => {
        vi.useFakeTimers()
      })

      afterEach(() => {
        vi.clearAllTimers()
      })

      afterAll(() => {
        vi.useRealTimers()
      })

      it('should return function', () => {
        const [, hook] = renderUseDebounceCallback()

        expect(typeof hook.result.current).toBe('function')
      })

      it('should call passed function after given amount of time', () => {
        const [fn, hook] = renderUseDebounceCallback()

        hook.result.current()
        vi.advanceTimersByTime(5)
        expect(fn).toHaveBeenCalledTimes(1)
      })

      it('should cancel function call on unmount', () => {
        const [fn, hook] = renderUseDebounceCallback()

        hook.result.current()
        hook.unmount()
        vi.advanceTimersByTime(5)
        expect(fn).toHaveBeenCalledTimes(0)
      })

      it('should cancel first function call on second call', () => {
        const [fn, hook] = renderUseDebounceCallback()

        hook.result.current()
        vi.advanceTimersByTime(2)
        hook.result.current()
        vi.advanceTimersByTime(5)
        expect(fn).toHaveBeenCalledTimes(1)
      })

      it('should clear timeout on delay change', () => {
        const [fn, hook] = renderUseDebounceCallback(6)

        hook.result.current()
        hook.rerender([5, []])
        vi.advanceTimersByTime(6)
        expect(fn).toHaveBeenCalledTimes(0)
      })

      it('should clear timeout on deps change', () => {
        const [fn, hook] = renderUseDebounceCallback(5, [1, 2])

        hook.result.current()
        hook.rerender([5, [2, 3]])
        vi.advanceTimersByTime(5)
        expect(fn).toHaveBeenCalledTimes(0)
      })
    })
  })
})
