/* @flow */

import * as React from 'react'

type Props = {
  children?: ?React.Element<any>,
  element: ({ refFn: () => HTMLElement }) => React$Element<string> | void,
  payload?: () => mixed,
  sequence: Array<string>
}

class Konami extends React.Component<Props> {
  pressed: number = 0
  element: React.ElementRef<*> = void 0

  onkeydown = (evt: KeyboardEvent): mixed => {
    const { payload = (): mixed => {}, sequence } = this.props || {}

    evt.key === sequence[this.pressed] ||
    evt.key.substr(5).toLowerCase() === sequence[this.pressed] // ArrowXXXX
      ? this.pressed += 1
      : this.pressed = 0
    if (this.pressed === sequence.length) {
      payload()
      this.pressed = 0
    }
  }

  listen = (): mixed => {
    if (this.element && this.element.addEventListener) {
      this.element.addEventListener('keydown', this.onkeydown)
    }
  }

  unlisten = (): mixed => {
    if (this.element && this.element.removeEventListener) {
      this.element.removeEventListener('keydown', this.onkeydown)
    }
  }

  componentWillUnmount () {
    this.unlisten()
  }

  componentDidMount () {
    const { element } = this.props || {}

    if (!(element instanceof Function)) {
      this.element = element
    }

    this.listen()
  }

  render () {
    const { children, element } = this.props || {}

    if (element instanceof Function) {
      return element({
        refFn: (ref) => {
          this.element = ref
        }
      })
    }

    return children ? children : null
  }
}

export default Konami
