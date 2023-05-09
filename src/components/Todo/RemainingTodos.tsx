import TodoList from '@components/Todo/TodoList';
import useTodos from '@hooks/useTodos';
import { Button } from '@ui/Buttons';
import { Card } from '@ui/Card';
import { ChevronIcon, ClockIcon } from '@ui/Icons';
import { Loading } from '@ui/Loading';
import { type FC } from 'react';

const RemainingTodos: FC = () => {
  const { todos, error, isLoading } = useTodos({ isFinished: false });

  return (
    <Card className="space-y-5">
      <div className="flex items-center space-x-2 text-xl text-accent-7">
        <ClockIcon className="h-5 w-5" />
        <h1>To Do</h1>
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
      {/* TODO: implement pagination */}
      {false && !isLoading && todos && todos.length > 0 && (
        <>
          <hr className="-mx-4 border-accent-1" />
          <div className="flex items-center justify-between text-sm text-accent-4">
            <p>
              Showing <span className="font-medium">1</span> to{' '}
              <span className="font-medium">10</span> of{' '}
              <span className="font-medium">20</span> results
            </p>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                disabled
                icon={<ChevronIcon direction="left" />}
              />
              <span className="font-medium">1</span>
              <Button
                variant="ghost"
                icon={<ChevronIcon />}
              />
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default RemainingTodos;
