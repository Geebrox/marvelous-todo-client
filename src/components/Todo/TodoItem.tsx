import type { Todo } from '@interfaces/todo.interfaces';
import { Button } from '@ui/Buttons';
import { Checkbox } from '@ui/Checkbox';
import { TrashIcon } from '@ui/Icons';
import { randomMinMax } from '@utils/number.utils';
import { type FC } from 'react';

export interface TodoItemProps extends Todo {
  onStatusChange: (id: string, isFinished: boolean) => void;
  onDelete: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = (props) => {
  const { id, title, isFinished, onStatusChange, onDelete } = props;

  return (
    <div className="flex justify-between">
      <Checkbox
        id={id}
        checked={isFinished}
        onChange={(event) => onStatusChange(id, !!event.currentTarget.checked)}
      >
        {title}
      </Checkbox>
      <Button
        variant="ghost"
        colorSchema="danger"
        icon={<TrashIcon />}
        onClick={() => onDelete(id)}
      />
    </div>
  );
};

export const TodoItemSkeleton = () => {
  return (
    <div className="flex animate-pulse items-center justify-between py-1">
      <div className="flex space-x-2">
        <span className="h-4 w-4 rounded bg-accent-1" />
        <span
          className="h-4 rounded bg-accent-1"
          style={{ width: `${randomMinMax(100, 200)}px` }}
        />
      </div>
      <span className="h-4 w-4 rounded bg-accent-1" />
    </div>
  );
};

export default TodoItem;
