import { GET } from "./actions";

const estado_inicial = {
    array: []
  };

function rootReducer(state = estado_inicial, action) {
    switch (action.type) {
      case GET:
        return {
          ...state,
          array: action.payload,
          
        };

        default:
            return state;
        }
      }
      
      export default rootReducer;