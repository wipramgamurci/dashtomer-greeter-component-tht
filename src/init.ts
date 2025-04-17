import { createApp } from 'vue'
import GreeterComponent from './GreeterComponent.vue'

interface GreeterProps {
  message: string
  buttonStyle?: Record<string, string>
}

interface Greeter {
  init: (selector: string, props: GreeterProps) => void
}

// Create the global Greeter object
const Greeter: Greeter = {
  init(selector: string, props: GreeterProps) {
    // Validate selector
    const targetElement = document.querySelector(selector)
    if (!targetElement) {
      console.warn(`Greeter: Element with selector "${selector}" not found`)
      return
    }

    // Validate required props
    if (!props.message || props.message.trim() === '') {
      console.warn('Greeter: message prop is required and cannot be empty')
      return
    }

    // Create and mount the Vue app
    const app = createApp(GreeterComponent, {
      message: props.message,
      buttonStyle: props.buttonStyle
    })
    app.mount(targetElement)
  }
}

// Export for testing
export { Greeter }

// Add to window object
declare global {
  interface Window {
    Greeter: Greeter
  }
}

window.Greeter = Greeter 