import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import GreeterComponent from '../src/GreeterComponent.vue'

describe('GreeterComponent', () => {
  it('mounts successfully', () => {
    const wrapper = mount(GreeterComponent, {
      props: {
        message: 'Hello Test'
      }
    })
    expect(wrapper.exists()).toBe(true)
  })

  it('renders button with correct text', () => {
    const wrapper = mount(GreeterComponent, {
      props: {
        message: 'Hello Test'
      }
    })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('applies custom button styles', () => {
    const customStyle = {
      backgroundColor: '#FF0000',
      color: '#FFFFFF'
    }
    const wrapper = mount(GreeterComponent, {
      props: {
        message: 'Hello Test',
        buttonStyle: customStyle
      }
    })
    const button = wrapper.find('button')
    const style = button.attributes('style')
    expect(style).toContain('background-color')
    expect(style).toContain('color')
  })

  it('logs message when clicked', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const message = 'Hello Test'
    const wrapper = mount(GreeterComponent, {
      props: { message }
    })
    
    await wrapper.find('button').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith(message)
    consoleSpy.mockRestore()
  })

  it('validates empty message prop', () => {
    const consoleWarnSpy = vi.spyOn(console, 'warn')
    mount(GreeterComponent, {
      props: {
        message: ''
      }
    })
    expect(consoleWarnSpy).toHaveBeenCalledWith('GreeterComponent: message prop is required and cannot be empty')
    consoleWarnSpy.mockRestore()
  })
})