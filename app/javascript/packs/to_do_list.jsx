import React from 'react'

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.items.map(item => (
            <li key={item.description}>{item.description}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ToDoList;
