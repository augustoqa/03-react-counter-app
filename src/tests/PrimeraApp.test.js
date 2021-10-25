import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
  test('debe de mostrar el mensaje "Hola, Soy Bart"', () => {
    const saludo = 'Hola, Soy Bart'

    const { getByText } = render(<PrimeraApp saludo={saludo} />)

    expect(getByText(saludo)).toBeInTheDocument()
  })
})
