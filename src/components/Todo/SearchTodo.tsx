import { todoSearchValueAtom } from '@stores/todo.store';
import { SearchIcon } from '@ui/Icons';
import { InputField } from '@ui/Input';
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { type FC } from 'react';

const SearchTodo: FC = () => {
  const [todoSearchValue, setTodoSearchValue] = useAtom(todoSearchValueAtom);

  return (
    <InputField
      containerProps={{ className: clsx('w-full') }}
      labelHidden
      placeholder="Search"
      icon={<SearchIcon />}
      value={todoSearchValue}
      onChange={(event) => setTodoSearchValue(event.currentTarget.value)}
    />
  );
};

export default SearchTodo;
