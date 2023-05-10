import { Ref } from 'react'

/**
 * Add `forwardRef` prop type to component's props.
 * @param TProps - Component's props.
 * @param TRef - Forwarded reference type, e. g. `HTMLElement`.
 */
export type WithForwardRef<TProps, TRef> = TProps & { forwardedRef: Ref<TRef> }
