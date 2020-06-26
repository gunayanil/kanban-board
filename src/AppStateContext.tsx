import React, { createContext, useReducer, useContext } from 'react';
import { nanoid } from 'nanoid';
import { AppState } from './App';
import { findItemIndexById } from './utils/findItemIndexById';

// passing two interfaces with "|", Action can resolve one of them
type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { text: string; listId: string };
    };

interface AppStateContextProps {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          { id: nanoid(), text: action.payload, tasks: [] },
        ],
      };
    }
    case 'ADD_TASK': {
      // get target list index
      const targetIndex = findItemIndexById(state.lists, action.payload.listId);
      state.lists[targetIndex].tasks.push({
        id: nanoid(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Build a kanban board' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Survive in 2020' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Graduate (what a timing)' }],
    },
  ],
};

// Retrieve the value from AppStateContext and return the result
export const useAppState = () => {
  return useContext(AppStateContext);
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
