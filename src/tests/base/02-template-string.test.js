import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string'

describe('Prueba en 02-template.string.js', () => {
  test('getSaludo debe de retornar Hola Cesar', () => {
    const nombre = 'Cesar'

    const saludo = getSaludo(nombre)

    expect(saludo).toBe('Hola ' + nombre)
  })

  test('getSaludo debe de retornar Hola Carlos si no se pasa argumento', () => {
    const saludo = getSaludo()

    expect(saludo).toBe('Hola Carlos')
  })
})
