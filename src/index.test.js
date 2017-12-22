import * as React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Konami from './'

configure({ adapter: new Adapter() })

function triggerKey (
  event: string,
  data: {
    bubbles?: boolean,
    cancelable?: boolean,
    composed?: boolean,
    key: string,
    scoped?: boolean
  },
  element
) {
  return element.dispatchEvent(new KeyboardEvent(event, data))
}

describe('<Konami />', (): void => {
  it('fires a callback with sequence: a, b, c', (): void => {
    const element = global.document
    const payloadSpy = jest.fn()

    mount(
      <Konami
        payload={payloadSpy}
        sequence={['a', 'b', 'c']}
        element={element}
      />
    )

    triggerKey('keydown', { key: 'a' }, element)
    triggerKey('keydown', { key: 'b' }, element)
    triggerKey('keydown', { key: 'c' }, element)

    expect(payloadSpy).toHaveBeenCalled()
  })

  it('fires a callback with sequence: o, m, g twice, in succession', (): void => {
    const element = global.document
    const payloadSpy = jest.fn()

    mount(
      <Konami
        payload={payloadSpy}
        sequence={['o', 'm', 'g']}
        element={element}
      />
    )

    triggerKey('keydown', { key: 'o' }, element)
    triggerKey('keydown', { key: 'm' }, element)
    triggerKey('keydown', { key: 'g' }, element)
    triggerKey('keydown', { key: 'o' }, element)
    triggerKey('keydown', { key: 'm' }, element)
    triggerKey('keydown', { key: 'g' }, element)

    expect(payloadSpy).toHaveBeenCalledTimes(2)
  })

  it('fires a callback with sequence: l, o, l on render prop element', (): void => {
    const payloadSpy = jest.fn()

    const wrapper = mount(
      <Konami
        payload={payloadSpy}
        sequence={['l', 'o', 'l']}
        element={({ refFn }: { refFn: () => HTMLElement }) => (
          <input type='text' ref={refFn} />
        )}
      />
    )

    const element = wrapper.instance().element

    triggerKey('keydown', { key: 'l' }, element)
    triggerKey('keydown', { key: 'o' }, element)
    triggerKey('keydown', { key: 'l' }, element)

    expect(payloadSpy).toHaveBeenCalled()
  })
})
