import { shallow } from 'enzyme'
import CounterApp from '../CouterApp'

describe('Pruebas para el componente <CounterApp />', () => {
  test('debe mostrar <CounterApp /> correctamente', () => {
    const wrapper = shallow(<CounterApp />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />)
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toEqual('100')
  })
})
