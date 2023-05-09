import useInputValue from '@hooks/useInputValue';
import useToast from '@hooks/useToast';
import type { ToastData } from '@interfaces/toast.interfaces';
import { Button } from '@ui/Buttons';
import { InputField } from '@ui/Input';
import clsx from 'clsx';
import { useCallback, useEffect, useState, type FC } from 'react';

enum ToastError {
  EmptyTitle = 'empty_title',
  TitleLengthExceeded = 'title_length_exceeded',
}

const errorToast: Record<ToastError, ToastData> = {
  [ToastError.EmptyTitle]: {
    title: 'Error',
    content: 'You should provide todo name to add it to the todos list',
    colorSchema: 'danger',
  },
  [ToastError.TitleLengthExceeded]: {
    title: 'Error',
    content:
      'The maximum length of the todo name should not exceed 32 characters',
    colorSchema: 'danger',
  },
};

const NewTodo: FC = () => {
  const [todoTitle, onTodoTitleChange] = useInputValue();
  const [isValid, setIsValid] = useState(true);
  const { addToast } = useToast();

  const onAddNewTodo = useCallback(() => {
    const trimmedTodoTitle = todoTitle.trim();

    if (trimmedTodoTitle.length < 1 || trimmedTodoTitle.length > 32) {
      setIsValid(false);
      addToast(
        errorToast[
          trimmedTodoTitle.length < 1
            ? ToastError.EmptyTitle
            : ToastError.TitleLengthExceeded
        ]
      );
      return;
    }

    onTodoTitleChange('');
    addToast({
      title: 'Success',
      content: (
        <p>
          Todo "<span className="font-medium">{trimmedTodoTitle}</span>" has
          been added successfully!
        </p>
      ),
      colorSchema: 'success',
    });
  }, [todoTitle, onTodoTitleChange, addToast]);

  useEffect(() => {
    if (!isValid && todoTitle.length > 0) {
      setIsValid(true);
    }
  }, [todoTitle, isValid]);

  return (
    <div className="flex items-center space-x-2">
      <InputField
        containerProps={{ className: clsx('w-full') }}
        labelHidden
        placeholder="Todo title"
        value={todoTitle}
        onChange={onTodoTitleChange}
        invalid={!isValid}
      />
      <Button onClick={onAddNewTodo}>Add</Button>
    </div>
  );
};

export default NewTodo;
