import React from 'react';
import { useAppState } from './AppStateContext';
import { AddNewItem } from './components/AddNewItem';
import { Column } from './components/Column';
import { MainContainer } from './styles';
import { DragItem } from './DragItem';
import CustomDragLayer from './components/CustomDragLayer';

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
  draggedItem: DragItem | undefined;
}

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <MainContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleBtnText='+ Add another list'
        onAdd={text => dispatch({ type: 'ADD_LIST', payload: text })}
      />
    </MainContainer>
  );
};

export default App;
