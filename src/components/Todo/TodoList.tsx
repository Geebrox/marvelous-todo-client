import { ROUTES } from '@assets/constants';
import TodoItem, { TodoItemSkeleton } from '@components/Todo/TodoItem';
import useToast from '@hooks/useToast';
import useTodosMutation from '@hooks/useTodosMutation';
import type { Todo } from '@interfaces/todo.interfaces';
import { fetcher } from '@utils/swr.utils';
import { useCallback, type FC } from 'react';

export interface TodoListProps {
  todos: Todo[];
  isLoading?: boolean;
}

const TodoList: FC<TodoListProps> = (props) => {
  const { todos, isLoading } = props;
  const { mutateTodos } = useTodosMutation();
  const { addToast } = useToast();

  const onTodoStatusChange = useCallback(
    (id: string, isFinished: boolean) => {
      const data: Partial<Todo> = {
        isFinished,
        finishedAt: new Date(),
      };

      fetcher(`${ROUTES.Todos}/${id}`, { method: 'PATCH', data })
        .then(() => {
          mutateTodos();
          addToast({
            title: 'Info',
            content: "Todo's status has been changed successfully",
          });
        })
        .catch((error) => {
          console.error(error);
          addToast({
            title: 'Error',
            content: 'An unexpected error occurred, please try again later',
            colorSchema: 'danger',
          });
        });
    },
    [mutateTodos, addToast]
  );

  const onTodoDelete = useCallback(
    (id: string) => {
      fetcher(`${ROUTES.Todos}/${id}`, { method: 'DELETE' })
        .then(() => {
          mutateTodos();
          addToast({
            title: 'Warning',
            content: 'Todo has been completely deleted',
            colorSchema: 'warning',
          });
        })
        .catch((error) => {
          console.error(error);
          addToast({
            title: 'Error',
            content: 'An unexpected error occurred, please try again later',
            colorSchema: 'danger',
          });
        });
    },
    [mutateTodos, addToast]
  );

  return (
    <div className="flex h-full max-h-96 flex-col space-y-4 overflow-y-auto">
      {isLoading ? (
        Array.from({ length: 5 }).map((_, idx) => (
          <TodoItemSkeleton key={idx} />
        ))
      ) : todos.length < 1 ? (
        <span className="-mt-4 flex h-full items-center justify-center py-8 text-center text-accent-2">
          There is nothing to show
        </span>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            onStatusChange={onTodoStatusChange}
            onDelete={onTodoDelete}
            {...todo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
