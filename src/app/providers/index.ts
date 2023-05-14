import { compose } from 'redux'

import { withChakra } from './with-chakra'
import { withRouter } from './with-router'
import { withStore } from './with-store'

export const withProviders = compose(withChakra, withStore, withRouter)
export { withStore, withChakra }
