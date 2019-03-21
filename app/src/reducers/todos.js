export default (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, data: [...state.data, action.data] };
    default:
      return state;
  }
};
