import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todos';

export class Deleted extends React.Component{
render() {
    return <React.Fragment>
      <h1>Deleted</h1>
      {
        
        this.props.data.filter(t => (t.deleted === true)).map(t =>
          <>
          
            <p key={t.id}>{t.text}
              <button type="button" onClick={this.Undel(t.id)}>UnDelete</button>
              
            </p>
          </>
        )
      }
    </React.Fragment>
  }
  Undel(id) {
    return F => {
      this.props.data.filter(t => (t.id === id)).map(t => {
        t.deleted = false;
        if(t.completed===false)
        {
          t.isListed=true;
        }
      })
      // debugger
      // document.getElementById('#'+txt).remove();
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Deleted);