import React from 'react'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let text_style = this.state.done ? { "textDecoration": "line-through"} : {}
    return(
      <li style={text_style}>
        <input type="checkbox" name='done' checked={this.state.done} value='1' onChange={this.handleChange} disabled={this.state.done}/>
        {this.props.item.description}
      </li>
    )
  }
  
  handleChange(event) {
    let item = this.state
    item.done = true
    this.setState(item)
    fetch('http://localhost:3000/to_do_items/' + this.props.item.id, { 
      method: 'PATCH',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        
      })
      .catch((error) => {
        this.state.done = false
        this.setState(this.state)
      })
    // Send done-ness to the server
    // Strike-through (on callback)
  }
}

export default ToDoItem;
