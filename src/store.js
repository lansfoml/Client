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

      case Action.CancelMemoryEdit:
      return {
        ...state,
        memories: state.memories.map(memory => {
          if (memory.id === action.payload) {
            return {...memory, isEditing: false};
          } else {
            return memory;
          }
        }),
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
      isEditing: false,
    },
    {
      id: 2,
      number: 3, 
      firstName: "Anthony", 
      lastName: "Davis", 
      age: 21, 
      team: "Lakers",
      position: "C",
      isEditing: false,
    },
  ],
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));