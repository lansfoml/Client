import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Action} from './actions';

function reducer(state, action) {
  switch (action.type) {
    case Action.ShowPlayers:
      return {
        ...state,
        players: action.payload,
      };
    case Action.ReplaceMemory:
        return {
          ...state,
          memories: state.memories.map(memory => {
            if (memory.id === action.payload.id) {
              return action.payload;
            } else {
              return memory;
            }
          }),
        };

  case Action.RemovePlayer:
      return {
        ...state,
        players: state.players.filter(player => player.id !== action.payload),
      };
    case Action.StartMemoryEdit:
      return {
        ...state,
        memories: state.memories.map(memory => {
          if (memory.id === action.payload) {
            return {...memory, isEditing: true};
          } else {
            return memory;
          }
        }),
      };

      case Action.StartedWaiting:
        return {
          ...state,
          isWaiting: true,
        };
      case Action.StoppedWaiting:
        return {
          ...state,
          isWaiting: false,
        };
      
    default:
      return state;
  }
}

const initialState = {
  players: [
    {
      id: 1,
      number: 1, 
      firstName: "Carmello", 
      lastName: "Anthony", 
      age: 34, 
      team: "Lakers",
      position: "SG",
      
    },
    {
      id: 2,
      number: 3, 
      firstName: "Anthony", 
      lastName: "Davis", 
      age: 21, 
      team: "Lakers",
      position: "C",
      
    },
  ],
  isWaiting: false,
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));