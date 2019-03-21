import { createStore } from 'redux';
import postsReducer from './reducers/todos';

const intialState = {
  data: [{text:"shgd",isListed:true,completed:false,deleted: false,id:2}],
  count: 0,
};

const store = createStore(postsReducer, intialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
