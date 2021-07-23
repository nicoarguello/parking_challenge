import { GET, NEXT, PREVIOUS } from "./actions";

const estado_inicial = {
  array: [],
  offset: 0,
  limit: 8,
  value: "",
};

function rootReducer(state = estado_inicial, action) {
  switch (action.type) {
    case GET:
      return {
        ...state,
        array: action.payload.store,
        offset: action.payload.offset,
        value: action.payload.value,
      };
    case NEXT:
      return {
        ...state,
        array: action.payload.store,
        offset: action.payload.offset,
      };
    case PREVIOUS:
      return {
        ...state,
        array: action.payload.store,
        offset: action.payload.offset,
      };

    default:
      return state;
  }
}

export default rootReducer;
