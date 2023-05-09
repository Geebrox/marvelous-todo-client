import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface LoadingProps extends ComponentProps<'span'> {}

export const Loading: FC<LoadingProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <span
      className={clsx(
        'h-4 w-4 animate-spin overflow-hidden rounded-full border-2 border-solid border-black border-r-transparent',
        className
      )}
      {...restProps}
    />
  );
};
