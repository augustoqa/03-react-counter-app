import ReactDOM from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CouterApp'

import './index.css'

const divRoot = document.querySelector('#root')

// ReactDOM.render(<PrimeraApp saludo='Hola, Soy Bart' />, divRoot)
ReactDOM.render(<CounterApp />, divRoot)
