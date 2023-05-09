import { useCallback, useState, type ChangeEvent } from 'react';

function useInputValue<T extends HTMLInputElement | HTMLTextAreaElement>(
  initialValue = ''
) {
  const [inputValue, setInputValue] = useState(initialValue);

  const onInputValueChange = useCallback((event: ChangeEvent<T> | string) => {
    setInputValue(
      typeof event === 'string' ? event : event.currentTarget.value
    );
  }, []);

  return [inputValue, onInputValueChange] as const;
}

export default useInputValue;
