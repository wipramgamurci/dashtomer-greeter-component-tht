import { config } from '@vue/test-utils'
import { vi } from 'vitest'

// Configure Vue Test Utils
config.global.mocks = {
  $t: (key: string) => key
}

// Mock console methods
vi.spyOn(console, 'log').mockImplementation(() => {})
vi.spyOn(console, 'warn').mockImplementation(() => {}) 