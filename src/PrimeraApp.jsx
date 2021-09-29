import { Fragment } from 'react'

const PrimeraApp = ({ saludo = 'Hola Mundo' }) => {
  return (
    <>
      <h1>{saludo}</h1>
      <p>Mi primera aplicacion</p>
    </>
  )
}

export default PrimeraApp
