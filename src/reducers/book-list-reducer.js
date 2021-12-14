import { setList } from '../utils/localStorage';

export default function reducer(state, action) {
  let newState = state;
  switch (action.type) {
    case 'init':
        newState = {...state, list: action.payload }
        break; 
    case 'edit':
      newState = {...state, list: state.list.map(x => {
          if(x.id === action.payload.id){
            x = action.payload
          }
          return x;
        }) };
        break;
    case 'add':
      newState = { ...state, list: [...state.list, {...action.payload, id: state.list.length + 1}] };
      break;
    case 'delete':
      newState = {...state, list: state.list.filter(x => x.id !== action.payload) }
      break;
    default:
      throw new Error();
  }
  
  setList(newState);
  return newState;
}