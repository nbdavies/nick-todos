import React from 'react'

class NewToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='to_do' onChange={this.handleChange} value={this.state.item}/>
        <input type='submit' value='Create'/>
      </form>
    )
  }
  
  handleSubmit(event) {
    event.preventDefault()
    this.props.onCreation(this.state.item)
    this.setState({
      item: ''
    })
    return false;
  }
  
  handleChange(event) {
    this.setState({
      item: event.target.value
    })
  }
}

export default NewToDo;
