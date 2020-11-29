import * as React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import Konami from './'

describe('<Konami />', (): void => {
  it('fires a callback with sequence: a, b, c', (): void => {
    const element = global.document
    const payloadSpy = jest.fn()

    render(
      <Konami
        payload={payloadSpy}
        sequence={['a', 'b', 'c']}
        element={element}
      />
    )

    fireEvent.keyDown(element, { key: 'a' })
    fireEvent.keyDown(element, { key: 'b' })
    fireEvent.keyDown(element, { key: 'c' })

    expect(payloadSpy).toHaveBeenCalledTimes(1)
  })

  it('fires a callback with sequence: o, m, g twice, in succession', (): void => {
    const element = global.document
    const payloadSpy = jest.fn()

    render(
      <Konami
        payload={payloadSpy}
        sequence={['o', 'm', 'g']}
        element={element}
      />
    )

    fireEvent.keyDown(element, { key: 'o' })
    fireEvent.keyDown(element, { key: 'm' })
    fireEvent.keyDown(element, { key: 'g' })
    fireEvent.keyDown(element, { key: 'o' })
    fireEvent.keyDown(element, { key: 'm' })
    fireEvent.keyDown(element, { key: 'g' })

    expect(payloadSpy).toHaveBeenCalledTimes(2)
  })

  it('fires a callback with sequence: l, o, l on render prop element', async (): void => {
    const payloadSpy = jest.fn()

    const wrapper = render(
      <Konami
        payload={payloadSpy}
        sequence={['l', 'o', 'l']}
        element={({ refFn }: { refFn: () => HTMLElement }) => (
          <input role='input' type='text' ref={refFn} />
        )}
      />
    )

    const element = await waitFor(() => wrapper.findByRole('input'))

    fireEvent.keyDown(element, { key: 'l' })
    fireEvent.keyDown(element, { key: 'o' })
    fireEvent.keyDown(element, { key: 'l' })

    expect(payloadSpy).toHaveBeenCalledTimes(1)
  })
})
