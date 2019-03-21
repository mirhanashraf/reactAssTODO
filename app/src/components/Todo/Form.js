import React from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addTodo } from '../../actions/todos';

class TodoForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.myTextInput.value) return;
    const todo = {
      text: this.myTextInput.value,isListed:true, completed: false, deleted: false, id: uuidv4(),
    };
    this.props.addTodo(todo);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={(ref) => this.myTextInput = ref} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
