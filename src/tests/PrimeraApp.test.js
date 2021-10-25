import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Bart'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)
    expect(wrapper).toMatchSnapshot()
  })
})
