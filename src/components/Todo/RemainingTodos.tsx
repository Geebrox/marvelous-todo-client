import TodoList from '@components/Todo/TodoList';
import type { Todo } from '@interfaces/todo.interfaces';
import { Button } from '@ui/Buttons';
import { Card } from '@ui/Card';
import { ChevronIcon, ClockIcon } from '@ui/Icons';
import { Loading } from '@ui/Loading';
import { type FC } from 'react';

const todoList: Todo[] = [
  {
    id: '1',
    title: 'Finish coding challenge',
    isFinished: false,
    createdAt: new Date('2023-05-06T13:30:00'),
    finishedAt: null,
  },
  {
    id: '2',
    title: 'Go grocery shopping',
    isFinished: false,
    createdAt: new Date('2023-05-07T10:00:00'),
    finishedAt: null,
  },
  {
    id: '3',
    title: 'Clean the house',
    isFinished: false,
    createdAt: new Date('2023-05-07T14:00:00'),
    finishedAt: null,
  },
  {
    id: '5',
    title: 'Practice playing guitar',
    isFinished: false,
    createdAt: new Date('2023-05-07T16:30:00'),
    finishedAt: null,
  },
  {
    id: '7',
    title: 'Do some exercise',
    isFinished: false,
    createdAt: new Date('2023-05-08T08:00:00'),
    finishedAt: null,
  },
  {
    id: '9',
    title: 'Finish writing a report',
    isFinished: false,
    createdAt: new Date('2023-05-06T17:00:00'),
    finishedAt: null,
  },
];

const RemainingTodos: FC = () => {
  return (
    <Card className="space-y-5">
      <div className="flex items-center space-x-2 text-xl text-accent-7">
        <ClockIcon className="h-5 w-5" />
        <h1>To Do</h1>
        <div className="flex flex-1 justify-end">
          <Loading className="opacity-25" />
        </div>
      </div>
      <hr className="-mx-4 border-accent-1" />
      <TodoList todos={todoList} />
      {todoList.length > 0 && (
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
