import React from 'react'

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li>
        <input type="checkbox" name='done' checked={this.props.item.done} value='1' onClick={this.handleCheck}/>
        {this.props.item.description}
      </li>
    )
  }
  
  handleCheck(event) {
    
  }
}

export default ToDoItem;
