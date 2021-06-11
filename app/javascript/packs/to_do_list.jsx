import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
