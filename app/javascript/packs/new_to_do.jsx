import React from 'react'

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: { description: ''}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='description' onChange={this.handleChange} value={this.state.item.description}/>
        <input type='submit' value='Create'/>
      </form>
    )
  }
  
  handleSubmit(event) {
    event.preventDefault()
    
    fetch('http://localhost:3000/to_do_items', { 
      method: 'POST',
      body: JSON.stringify(this.state.item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        this.props.onCreation(data)
      })
    this.setState({
      item: { description: '' }
    })
    return false;
  }
  
  handleChange(event) {
    this.setState({
      item: { description: event.target.value }
    })
  }
}

export default NewToDo;
