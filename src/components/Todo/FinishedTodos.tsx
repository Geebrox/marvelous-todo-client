import TodoList from '@components/Todo/TodoList';
import useTodos from '@hooks/useTodos';
import { Card } from '@ui/Card';
import { CheckCircleIcon } from '@ui/Icons';
import { Loading } from '@ui/Loading';
import { type FC } from 'react';

const FinishedTodos: FC = () => {
  const { todos, error, isLoading } = useTodos({ isFinished: true, take: 10 });

  return (
    <Card className="space-y-5">
      <div className="flex items-center space-x-2 text-accent-7">
        <CheckCircleIcon className="h-5 w-5" />
        <h1 className="text-xl">Done</h1>
        {isLoading && (
          <div className="flex flex-1 justify-end">
            <Loading className="opacity-25" />
          </div>
        )}
      </div>
      <hr className="-mx-4 border-accent-1" />
      <TodoList
        todos={(!isLoading && !error && todos) || []}
        isLoading={isLoading}
      />
    </Card>
  );
};

export default FinishedTodos;
