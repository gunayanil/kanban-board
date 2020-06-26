import React, { createContext, useReducer, useContext } from 'react';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

export interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
}

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

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
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}s
    </AppStateContext.Provider>
  );
};
