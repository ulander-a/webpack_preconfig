import _ from 'lodash'
import './style/style.css'
import printMe from './print'

function component() {
    let element = document.createElement('div')
    let btn = document.createElement('button')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
  }
  
  document.body.appendChild(component())
  