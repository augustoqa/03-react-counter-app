import { getImagen } from '../../base/11-async-await'

describe('Pruebas con sync-await y Fetch', () => {
  test('debe de retoranr el url de la imagen', async () => {
    const url = await getImagen()

    expect(url.includes('https://')).toBe(true)
  })
})
