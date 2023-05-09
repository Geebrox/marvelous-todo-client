import { AlertIcon } from '@ui/Icons';
import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';

interface InputFieldLabelProps extends ComponentProps<'label'> {
  labelHidden?: boolean;
}

const InputFieldLabel: FC<InputFieldLabelProps> = (props) => {
  const { className, labelHidden = false, ...restProps } = props;

  return (
    <label
      className={clsx(
        'block text-sm font-medium leading-6 text-accent-7',
        labelHidden && 'sr-only',
        className
      )}
      {...restProps}
    />
  );
};

interface InputFieldInputWrapperProps extends ComponentProps<'div'> {}

const InputFieldInputWrapper: FC<InputFieldInputWrapperProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx('relative rounded-md shadow-next', className)}
      {...restProps}
    />
  );
};

interface InputFieldInputProps extends ComponentProps<'input'> {
  invalid?: boolean;
}

const InputFieldInput: FC<InputFieldInputProps> = (props) => {
  const { type = 'text', invalid = false, className, ...restProps } = props;

  return (
    <input
      className={clsx(
        invalid
          ? 'text-red-700 ring-red-400 placeholder:text-red-400 focus:ring-red-600'
          : 'text-accent-5 ring-accent-1 placeholder:text-accent-2 focus:ring-accent-4',
        'block w-full rounded-md border-0 py-1.5 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
        className
      )}
      type={type}
      {...restProps}
    />
  );
};

export interface InputProps extends ComponentProps<'input'> {
  invalid?: boolean;
  label?: string;
  labelHidden?: boolean;
  labelProps?: ComponentProps<'label'>;
  inputWrapperProps?: InputFieldInputWrapperProps;
  containerProps?: ComponentProps<'div'>;
  icon?: ReactNode;
}

export const InputField: FC<InputProps> = (props) => {
  const {
    className,
    invalid = false,
    label = '',
    labelHidden = false,
    labelProps,
    inputWrapperProps,
    containerProps,
    icon,
    ...inputProps
  } = props;

  return (
    <div {...containerProps}>
      <InputFieldLabel
        htmlFor={inputProps.id}
        labelHidden={labelHidden}
        {...labelProps}
      >
        {label}
      </InputFieldLabel>
      <InputFieldInputWrapper {...inputWrapperProps}>
        {icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-accent-2">
            {icon}
          </div>
        )}
        <InputFieldInput
          invalid={invalid}
          className={clsx(invalid && 'pr-10', icon && 'pl-10', className)}
          {...inputProps}
        />
        {invalid && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-red-700">
            <AlertIcon
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>
        )}
      </InputFieldInputWrapper>
    </div>
  );
};
