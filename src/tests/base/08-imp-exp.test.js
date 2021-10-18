import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Heroes', () => {
  test('debe de retornar un heroe por id', () => {
    const id = 1
    const heroe = getHeroeById(id)

    const heroeData = heroes.find((h) => h.id === id)

    expect(heroe).toEqual(heroeData)
  })

  test('debe de retornar undefined si no existe Heroe', () => {
    const id = 10
    const heroe = getHeroeById(id)

    expect(heroe).toBe(undefined)
  })

  test('debe de retornar un arreglo con los heroes de DC', () => {
    const owner = 'DC'
    const heroesEsperados = heroes.filter((h) => h.owner === owner)

    const heroesObtenidos = getHeroesByOwner(owner)

    expect(heroesEsperados).toEqual(heroesObtenidos)
  })

  test('debe de retornar un arreglo con los heroes de Marvel', () => {
    const owner = 'Marvel'

    const heroesObtenidos = getHeroesByOwner(owner)

    expect(2).toBe(heroesObtenidos.length)
  })
})
