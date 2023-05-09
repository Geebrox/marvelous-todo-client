import type {
  ColorSchema,
  HorizontalPosition,
} from '@interfaces/ui.interfaces';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface CheckboxInputProps extends ComponentProps<'input'> {
  colorSchema?: ColorSchema;
}

const CheckboxInput: FC<CheckboxInputProps> = (props) => {
  const { className, colorSchema = 'default', ...restProps } = props;

  return (
    <input
      className={clsx(
        'h-4 w-4 cursor-pointer rounded border-accent-2 transition-colors focus:ring-0',
        {
          default: 'text-black',
          success: 'text-green-700',
          warning: 'text-orange-400',
          danger: 'text-red-700',
        }[colorSchema],
        className
      )}
      type="checkbox"
      {...restProps}
    />
  );
};

interface CheckboxInputWrapperProps extends ComponentProps<'div'> {}

const CheckboxInputWrapper: FC<CheckboxInputWrapperProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx('flex h-6 items-center', className)}
      {...restProps}
    />
  );
};

interface CheckboxLabelProps extends ComponentProps<'label'> {}

const CheckboxLabel: FC<CheckboxLabelProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <label
      className={clsx('select-none font-medium text-accent-5', className)}
      {...restProps}
    />
  );
};

interface CheckboxLabelWrapperProps extends ComponentProps<'div'> {}

const CheckboxWrapperLabel: FC<CheckboxLabelWrapperProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div
      className={clsx('min-w-0 text-sm leading-6', className)}
      {...restProps}
    />
  );
};

export interface CheckboxProps extends ComponentProps<'input'> {
  containerProps?: ComponentProps<'div'>;
  labelWrapperProps?: CheckboxLabelWrapperProps;
  labelProps?: CheckboxLabelProps;
  inputWrapperProps?: CheckboxInputProps;
  colorSchema?: ColorSchema;
  labelPosition?: HorizontalPosition;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    containerProps,
    labelWrapperProps,
    labelProps,
    inputWrapperProps,
    children,
    colorSchema,
    labelPosition = 'left',
    ...inputProps
  } = props;

  const { className, ...restProps } = containerProps || {};

  const LabelWrapper = (
    <CheckboxWrapperLabel {...labelWrapperProps}>
      <CheckboxLabel
        htmlFor={inputProps.id}
        {...labelProps}
      >
        {children}
      </CheckboxLabel>
    </CheckboxWrapperLabel>
  );

  return (
    <div
      className={clsx(
        'flex items-center space-x-2',
        labelPosition === 'right' && 'w-full justify-between',
        className
      )}
      {...restProps}
    >
      {labelPosition === 'right' && LabelWrapper}
      <CheckboxInputWrapper {...inputWrapperProps}>
        <CheckboxInput
          colorSchema={colorSchema}
          {...inputProps}
        />
      </CheckboxInputWrapper>
      {labelPosition === 'left' && LabelWrapper}
    </div>
  );
};
