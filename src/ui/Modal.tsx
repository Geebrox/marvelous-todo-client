import type { ColorSchema } from '@interfaces/ui.interfaces';
import { AlertIcon, CheckCircleIcon, WarningIcon } from '@ui/Icons';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, type FC } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  isOpen: boolean;
  colorSchema?: ColorSchema;
  title?: ReactNode;
  cancelButton?: ReactNode;
  confirmButton?: ReactNode;
  shouldCloseOnEsc?: boolean;
  shouldFocusAfterRender?: boolean;
  shouldReturnFocusAfterClose?: boolean;
  onClose?: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = (props) => {
  const {
    isOpen,
    colorSchema = 'default',
    title,
    cancelButton,
    confirmButton,
    onClose,
    children,
    shouldCloseOnEsc,
    shouldFocusAfterRender,
    shouldReturnFocusAfterClose,
  } = props;

  const Icon = {
    default: null,
    success: CheckCircleIcon,
    warning: WarningIcon,
    danger: AlertIcon,
  }[colorSchema];

  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={clsx(
        'fixed inset-0 z-50 overflow-y-hidden bg-accent-4 bg-opacity-75 transition-opacity'
      )}
      className={clsx(
        'pointer-events-auto flex min-h-full items-end justify-center overflow-y-auto p-4 text-center sm:items-center sm:p-0'
      )}
      onRequestClose={onClose}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldFocusAfterRender={shouldFocusAfterRender}
      shouldReturnFocusAfterClose={shouldReturnFocusAfterClose}
    >
      <div className="relative transform animate-fade-in-up overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-next transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
        <div className="sm:flex sm:items-start">
          {Icon && (
            <div
              className={clsx(
                {
                  default: '',
                  success: 'bg-green-100',
                  warning: 'bg-orange-100',
                  danger: 'bg-red-100',
                }[colorSchema],
                'mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10'
              )}
            >
              <Icon
                className={clsx(
                  {
                    default: '',
                    success: 'text-green-700',
                    warning: 'text-orange-400',
                    danger: 'text-red-700',
                  }[colorSchema],
                  'h-6 w-6'
                )}
                aria-hidden="true"
              />
            </div>
          )}
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            {title && (
              <div className="text-base font-semibold leading-6 text-accent-7">
                {title}
              </div>
            )}
            {children && <div className="mt-2">{children}</div>}
          </div>
        </div>
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          {confirmButton}
          {cancelButton}
        </div>
      </div>
    </ReactModal>
  );
};
