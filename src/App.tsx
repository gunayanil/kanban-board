import React from 'react';
import { useAppState } from './AppStateContext';
import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { MainContainer } from './styles';

const App = () => {
  const { state, dispatch } = useAppState();

  return (
    <MainContainer>
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
