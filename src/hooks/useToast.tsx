import type { ToastData } from '@interfaces/toast.interfaces';
import { Toast } from '@ui/Toast';
import clsx from 'clsx';
import { useCallback } from 'react';
import { toast } from 'react-hot-toast';

const useToast = () => {
  const addToast = useCallback((toastData: ToastData) => {
    const { duration = 5_000 } = toastData;

    return toast.custom(
      ({ id, visible }) => (
        <Toast
          className={clsx(
            'transition-opacity',
            visible ? 'animate-fade-in-down' : 'animate-fade-out-up opacity-0'
          )}
          onDismiss={() => toast.dismiss(id)}
          {...toastData}
        />
      ),
      { duration }
    );
  }, []);

  const removeToast = useCallback((tostId: string) => {
    return toast.dismiss(tostId);
  }, []);

  return { addToast, removeToast };
};

export default useToast;
