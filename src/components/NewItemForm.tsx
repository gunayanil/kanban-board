import React, { useState } from 'react';
import { useFocus } from '../utils/useFocus';
import { NewItemFormContainer, NewItemBtn, NewItemInput } from '../styles';

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState('');
  const { onAdd } = props;
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <NewItemBtn onClick={() => onAdd(text)}>Create</NewItemBtn>
    </NewItemFormContainer>
  );
};
