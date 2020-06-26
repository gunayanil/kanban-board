import React, { useState } from 'react';
import { NewItemForm } from './NewItemForm';
import { AddItemBtn, NewItemFormContainer } from '../styles';

interface AddNewItemProps {
  onAdd(text: string): void;
  toggleBtnText: string;
  dark?: boolean;
}

export const AddNewItem = (props: AddNewItemProps) => {
  const [isShownForm, setIsShownForm] = useState(false);
  const { onAdd, toggleBtnText, dark } = props;

  if (isShownForm) {
    return (
      <NewItemForm
        onAdd={text => {
          onAdd(text);
          setIsShownForm(false);
        }}
      />
    );
  }

  return (
    <AddItemBtn dark={dark} onClick={() => setIsShownForm(true)}>
      {toggleBtnText}
    </AddItemBtn>
  );
};
