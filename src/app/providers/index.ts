import { compose } from 'redux'

import { withRouter } from './with-router'
import { withStore } from './with-store'
import { withChakra } from './with-chakra'

export const withProviders = compose(withChakra, withStore, withRouter)
