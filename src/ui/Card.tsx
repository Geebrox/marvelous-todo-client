import { clsx } from 'clsx';
import type { ComponentProps, FC } from 'react';

export interface CardProps extends ComponentProps<'div'> {}

export const Card: FC<CardProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx(
        'flex flex-col overflow-hidden rounded-xl bg-white px-4 py-5 shadow-next',
        className
      )}
      {...restProps}
    />
  );
};
