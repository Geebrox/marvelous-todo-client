import useInputValue from '@hooks/useInputValue';
import { SearchIcon } from '@ui/Icons';
import { InputField } from '@ui/Input';
import clsx from 'clsx';
import { type FC } from 'react';

const SearchTodo: FC = () => {
  const [searchValue, onSearchValueChange] = useInputValue();

  return (
    <InputField
      containerProps={{ className: clsx('w-full') }}
      labelHidden
      placeholder="Search"
      icon={<SearchIcon />}
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};

export default SearchTodo;
