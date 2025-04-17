import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Greeter } from '../src/init'

describe('Greeter initialization', () => {
  let consoleSpy: {
    warn: ReturnType<typeof vi.spyOn>
    log: ReturnType<typeof vi.spyOn>
  }

  beforeEach(() => {
    // Create a test element
    document.body.innerHTML = '<div id="test-target"></div>'
    
    // Spy on console methods
    consoleSpy = {
      warn: vi.spyOn(console, 'warn'),
      log: vi.spyOn(console, 'log')
    }
  })

  afterEach(() => {
    // Clean up
    document.body.innerHTML = ''
    consoleSpy.warn.mockRestore()
    consoleSpy.log.mockRestore()
  })

  it('initializes component with valid selector and props', () => {
    const props = { message: 'Hello Test' }
    Greeter.init('#test-target', props)
    
    const button = document.querySelector('#test-target button')
    expect(button).toBeTruthy()
    expect(button?.textContent?.trim()).toBe('Click Me')
  })

  it('applies custom styles when provided', () => {
    const props = {
      message: 'Hello Test',
      buttonStyle: { backgroundColor: '#FF0000', color: '#FFFFFF' }
    }
    Greeter.init('#test-target', props)
    
    const button = document.querySelector('#test-target button')
    const style = button?.getAttribute('style')
    expect(style).toContain('background-color: rgb(255, 0, 0)')
    expect(style).toContain('color: rgb(255, 255, 255)')
  })

  it('warns when selector is not found', () => {
    Greeter.init('#non-existent', { message: 'Hello Test' })
    expect(consoleSpy.warn).toHaveBeenCalledWith(
      'Greeter: Element with selector "#non-existent" not found'
    )
  })

  it('warns when message prop is empty', () => {
    Greeter.init('#test-target', { message: '' })
    expect(consoleSpy.warn).toHaveBeenCalledWith(
      'Greeter: message prop is required and cannot be empty'
    )
  })

  it('logs message when button is clicked', async () => {
    const props = { message: 'Hello Test' }
    Greeter.init('#test-target', props)
    
    const button = document.querySelector('#test-target button') as HTMLButtonElement
    button?.click()
    
    expect(consoleSpy.log).toHaveBeenCalledWith('Hello Test')
  })
})
