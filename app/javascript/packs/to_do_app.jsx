import React from 'react'
import ReactDOM from 'react-dom'
import ToDoList from './to_do_list'
import NewToDo from './new_to_do'

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.handleCreation = this.handleCreation.bind(this);
  }
  
  componentDidMount() {
    fetch('http://localhost:3000/to_do_items', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => { this.setState({ items: data }) })
  }

  render() {
    return(
      <div>
        <h2>To Do App</h2>
        <ToDoList items={this.state.items} />
        <NewToDo onCreation={this.handleCreation}/>
      </div>
    )
  }

  handleCreation(item){
    this.setState({
      items: this.state.items.concat(item)
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ToDoApp />,
    document.body.appendChild(document.createElement('div')),
  )
})
