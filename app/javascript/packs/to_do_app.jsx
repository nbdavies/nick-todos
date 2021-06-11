import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './to_do_list'

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["do something", "do something else"]
    }
  }

  render() {
    return(
      <div>
        <h2>To Do App</h2>
        <ToDoList items={this.state.items} />
        {/* NewToDo */}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToDoApp />,
    document.body.appendChild(document.createElement('div')),
  )
})
