import React from 'react';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { MainContainer } from './styles';

function App() {
  return (
    <MainContainer>
      <Column text='To Do'>
        <Card text='Build a kanban board' />
      </Column>
      <Column text='In Propgress'>
        <Card text='Survive in 2020!' />
      </Column>
      <Column text='Done'>
        <Card text='Graduate (what a timing)' />
      </Column>
    </MainContainer>
  );
}

export default App;
