import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';

export class TodoList extends React.Component {

  render() {
    return (
    <React.Fragment>
      <>
      <h1>List</h1>
      {
        this.props.data.filter( t => (t.isListed===true)).map(t =>
          <p key={t.text}>{t.text} 
          <button onClick={this.completedFn(t.id)}>completed</button>
          <button onClick={this.deletedFn(t.id)}>delete</button></p>
         
        )
      }
      </>
    </React.Fragment>
    )
  }

  completedFn(id) {
    return F => {
      this.props.data.filter(t => (t.id === id)).map(t => {t.completed = true ; t.isListed=false})
      const newData = this.props.data;
      this.props.RefreshTodo(newData);
    }
  }
  deletedFn(id) {
    return D => {
      this.props.data.filter(t => (t.id === id)).map(t => {t.deleted = true; t.isListed=false})
      const newData = this.props.data;
      this.props.RefreshTodo(newData);
    }
  }
}


const mapDispatchToProps = dispatch => ({
  RefreshTodo: todo => dispatch(addTodo(todo)),
});
const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
