import TodoItem, { TodoItemSkeleton } from '@components/Todo/TodoItem';
import type { Todo } from '@interfaces/todo.interfaces';
import { type FC } from 'react';

export interface TodoListProps {
  todos: Todo[];
  isLoading?: boolean;
}

const TodoList: FC<TodoListProps> = (props) => {
  const { todos, isLoading } = props;

  return (
    <div className="flex h-full flex-col space-y-4">
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
            onStatusChange={() => {}}
            onDelete={() => {}}
            {...todo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
