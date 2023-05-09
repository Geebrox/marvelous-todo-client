import { ROUTES } from '@assets/constants';
import useInputValue from '@hooks/useInputValue';
import useToast from '@hooks/useToast';
import useTodosMutation from '@hooks/useTodosMutation';
import type { ToastData } from '@interfaces/toast.interfaces';
import { Button } from '@ui/Buttons';
import { InputField } from '@ui/Input';
import { fetcher } from '@utils/swr.utils';
import clsx from 'clsx';
import { useCallback, useEffect, useState, type FC } from 'react';

enum ToastError {
  EmptyTitle = 'empty_title',
  TitleLengthExceeded = 'title_length_exceeded',
  UnExpectedError = 'unexpected_error',
}

const ERROR_TOAST: Record<ToastError, ToastData> = {
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
  [ToastError.UnExpectedError]: {
    title: 'Error',
    content: 'An unexpected error occurred, please try again later',
    colorSchema: 'danger',
  },
};

const NewTodo: FC = () => {
  const [title, onTitleChange] = useInputValue();
  const [isValid, setIsValid] = useState(true);
  const { addToast } = useToast();
  const { mutateTodos } = useTodosMutation();
  const [isLoading, setIsLoading] = useState(false);

  const onAddNewTodo = useCallback(() => {
    if (isLoading) {
      return;
    }

    const trimmedTitle = title.trim();

    if (trimmedTitle.length < 1 || trimmedTitle.length > 32) {
      setIsValid(false);
      addToast(
        ERROR_TOAST[
          trimmedTitle.length < 1
            ? ToastError.EmptyTitle
            : ToastError.TitleLengthExceeded
        ]
      );
      return;
    }

    setIsLoading(true);

    fetcher(ROUTES.Todos, {
      method: 'POST',
      data: { title },
    })
      .then(() => {
        mutateTodos();
        addToast({
          title: 'Success',
          content: (
            <p>
              Todo "<span className="font-medium">{trimmedTitle}</span>" has
              been added successfully!
            </p>
          ),
          colorSchema: 'success',
        });
      })
      .catch((error) => {
        console.error(error);
        addToast(ERROR_TOAST[ToastError.UnExpectedError]);
      })
      .finally(() => {
        onTitleChange('');
        setIsLoading(false);
      });
  }, [title, onTitleChange, addToast, mutateTodos, isLoading]);

  useEffect(() => {
    if (!isValid && title.length > 0) {
      setIsValid(true);
    }
  }, [title, isValid]);

  return (
    <div className="flex items-center space-x-2">
      <InputField
        containerProps={{ className: clsx('w-full') }}
        labelHidden
        placeholder="Todo title"
        value={title}
        onChange={onTitleChange}
        invalid={!isValid}
        disabled={isLoading}
      />
      <Button onClick={onAddNewTodo}>Add</Button>
    </div>
  );
};

export default NewTodo;
