import React from 'react'
import reactDOM from 'react-dom'

// css imports
// is this import even working??
import './css/normalize.css'
import './css/Styles.css'

// component imports
import App from './components/App'

reactDOM.render(<App />, document.querySelector('#root'))
