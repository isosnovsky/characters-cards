import { setupWorker } from 'msw'

import { handlers } from '@/entities/characters'

export const worker = setupWorker(...handlers)
