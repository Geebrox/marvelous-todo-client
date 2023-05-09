import { ROUTES } from '@assets/constants';
import useToast from '@hooks/useToast';
import type { Todo, TodoFilter } from '@interfaces/todo.interfaces';
import { todoSearchValueAtom } from '@stores/todo.store';
import { useAtomValue } from 'jotai';
import { useEffect, useMemo } from 'react';
import useSWR from 'swr';

const useTodos = (params?: TodoFilter) => {
  const { data, error, isLoading } = useSWR<Todo[]>({
    url: ROUTES.Todos,
    params,
  });

  const { addToast } = useToast();

  useEffect(() => {
    if (!isLoading && error) {
      addToast({
        title: 'Error',
        content:
          'An unexpected error occurred while loading todos list, please try to refresh the page',
        colorSchema: 'danger',
      });
    }
  }, [isLoading, error, addToast]);

  const todoSearchValue = useAtomValue(todoSearchValueAtom);

  const todos = useMemo(() => {
    if (isLoading || error || !data || data.length < 1) {
      return [];
    }

    const trimmedTodoSearchValue = todoSearchValue.trim().toLowerCase();

    if (trimmedTodoSearchValue.length < 1) {
      return data;
    }

    return data.filter((todo) =>
      todo.title.trim().toLowerCase().includes(trimmedTodoSearchValue)
    );
  }, [error, isLoading, todoSearchValue, data]);

  return { todos, error, isLoading };
};

export default useTodos;
