import { ROUTES } from '@assets/constants';
import { useCallback } from 'react';
import { useSWRConfig } from 'swr';

const useTodosMutation = () => {
  const { mutate } = useSWRConfig();

  const mutateTodos = useCallback(() => {
    mutate((key: Record<PropertyKey, unknown>) => {
      return `${key?.['url']}`.includes(ROUTES.Todos);
    });
  }, [mutate]);

  return { mutateTodos };
};

export default useTodosMutation;
