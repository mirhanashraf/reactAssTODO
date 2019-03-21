import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';


export class Completed extends React.Component {
  render() {
    return <React.Fragment>
      <h1>completed</h1>

      {
        this.props.data.filter(t => (t.completed === true && t.deleted=== false)).map(t =>
          <>
            <p key={t.id}>{t.text}
              <button onClick={this.Uncomp(t.id)}>UNcompleted</button>
              <button onClick={this.deletedFn(t.id)}>delete</button>
            </p>
          </>
        )
      }
    </React.Fragment>
  }
  Uncomp(id) {
    return F => {
      this.props.data.filter(t => (t.id === id)).map(t => {t.completed = false;t.isListed=true})
      // debugger
      // document.getElementById('#'+txt).remove();
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

export default connect(mapStateToProps, mapDispatchToProps)(Completed);