import React from 'react';
import { useAppState } from './AppStateContext';
import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { MainContainer } from './styles';

const App = () => {
  const { state } = useAppState();

  return (
    <MainContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem toggleBtnText='+ Add another list' onAdd={console.log} />
    </MainContainer>
  );
};

export default App;
