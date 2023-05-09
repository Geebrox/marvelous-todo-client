import type { Position } from '@interfaces/ui.interfaces';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface IconProps extends ComponentProps<'svg'> {}

export const Icon: FC<IconProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx('h-4 w-4', className)}
      {...restProps}
    />
  );
};

export const TrashIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </Icon>
  );
};

export const ClockIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </Icon>
  );
};

export const CheckCircleIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </Icon>
  );
};

export const CheckIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="m4.5 12.75 6 6 9-13.5" />
    </Icon>
  );
};

interface ChevronIconProps extends IconProps {
  direction?: Position;
}

export const ChevronIcon: FC<ChevronIconProps> = (props) => {
  const { direction = 'right', ...restProps } = props;

  return (
    <Icon
      className={clsx(
        {
          right: 'rotate-0',
          left: 'rotate-180',
          top: '-rotate-90',
          bottom: 'rotate-90',
        }[direction]
      )}
      {...restProps}
    >
      <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </Icon>
  );
};

export const AlertIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h0v0h0v0z" />
    </Icon>
  );
};

export const SearchIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="m21 21-5.2-5.2m0 0A7.5 7.5 0 1 0 5.2 5.2a7.5 7.5 0 0 0 10.6 10.6z" />
    </Icon>
  );
};

export const XIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M6 18L18 6M6 6l12 12" />
    </Icon>
  );
};

export const WarningIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </Icon>
  );
};

export const BellIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M14.86 17.08a23.85 23.85 0 0 0 5.45-1.3A8.97 8.97 0 0 1 18 9.74V9A6 6 0 0 0 6 9v.75a8.97 8.97 0 0 1-2.31 6.02c1.73.64 3.56 1.09 5.45 1.31m5.72 0a24.25 24.25 0 0 1-5.72 0m5.72 0a3 3 0 1 1-5.72 0" />
    </Icon>
  );
};

export const QuestionIcon: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <path d="M9.88 7.52a3.31 3.31 0 0 1 4.24 0 2.4 2.4 0 0 1 0 3.71c-.2.18-.43.33-.67.44-.74.36-1.45 1-1.45 1.83v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 5.25h0v0h0v0z" />
    </Icon>
  );
};
