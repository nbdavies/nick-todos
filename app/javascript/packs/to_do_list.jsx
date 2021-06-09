import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello from React!</div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToDoList />,
    document.body.appendChild(document.createElement('div')),
  )
})
