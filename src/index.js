import ReactDOM from 'react-dom'
import CounterApp from './CouterApp'

import './index.css'

const divRoot = document.querySelector('#root')

ReactDOM.render(<CounterApp value={10} />, divRoot)
