import type { ToastData } from '@interfaces/toast.interfaces';
import {
  AlertIcon,
  BellIcon,
  CheckCircleIcon,
  WarningIcon,
  XIcon,
} from '@ui/Icons';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface ToastProps
  extends Omit<ComponentProps<'div'>, keyof ToastData>,
    ToastData {
  onDismiss?: () => void;
}

export const Toast: FC<ToastProps> = (props) => {
  const {
    className,
    title,
    content,
    colorSchema = 'default',
    onDismiss,
    ...restProps
  } = props;

  const Icon = {
    default: BellIcon,
    success: CheckCircleIcon,
    warning: WarningIcon,
    danger: AlertIcon,
  }[colorSchema];

  return (
    <div
      className={clsx(
        'pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-next ring-1 ring-black ring-opacity-5',
        className
      )}
      {...restProps}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <Icon
              className={clsx(
                {
                  default: 'text-accent-7',
                  success: 'text-green-700',
                  warning: 'text-orange-400',
                  danger: 'text-red-700',
                }[colorSchema],
                'h-6 w-6'
              )}
              aria-hidden="true"
            />
          </div>
          <div className="ml-3 w-0 flex-1 pt-0.5">
            <p className="text-sm font-medium text-accent-7">{title}</p>
            <p className="mt-1 text-sm text-accent-4">{content}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-accent-3 hover:text-accent-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={onDismiss}
            >
              <span className="sr-only">Close</span>
              <XIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
