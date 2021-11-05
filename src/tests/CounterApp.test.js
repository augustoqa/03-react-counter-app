import { shallow } from 'enzyme'
import CounterApp from '../CouterApp'

describe('Pruebas para el componente <CounterApp />', () => {
  let wrapper = shallow(<CounterApp />)

  beforeEach(() => {
    wrapper = shallow(<CounterApp />)
  })

  test('debe mostrar <CounterApp /> correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />)
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toEqual('100')
  })

  test('debe de incrementar con el boton +1', () => {
    wrapper.find('button').at(0).simulate('click')
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toBe('11')
  })

  test('debe de decrementar con el boton -1', () => {
    wrapper.find('button').at(2).simulate('click')
    const counterText = wrapper.find('h2').text().trim()
    expect(counterText).toBe('9')
  })
})
