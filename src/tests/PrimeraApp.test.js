import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
  test('debe de mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Bart'
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy Bart'
    const subtitulo = 'Soy un subtitulo'
    const wrapper = shallow(
      <PrimeraApp saludo={saludo} subtitulo={subtitulo} />
    )

    const textoParrafo = wrapper.find('p').text()
    expect(textoParrafo).toBe(subtitulo)
  })
})
