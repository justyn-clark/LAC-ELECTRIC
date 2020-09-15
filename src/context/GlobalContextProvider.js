import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext({});
export const GlobalDispatchContext = createContext({});

const initialState = {
  modalOpen: false,
  selectedImage: null,
  selectedGroup: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MODAL_STATE': {
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    }
    case 'SET_SELECTED_IMAGE': {
      return {
        ...state,
        selectedImage: action.payload,
      };
    }
    case 'SET_SELECTED_GROUP': {
      return {
        ...state,
        selectedGroup: action.payload,
      };
    }
    default:
      throw new Error('Bad Action Type');
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
