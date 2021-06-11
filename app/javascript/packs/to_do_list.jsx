import React from 'react'
import ToDoItem from './to_do_item'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.items.map(item => (
            <ToDoItem item={item} key={item.id}/>
          ))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
