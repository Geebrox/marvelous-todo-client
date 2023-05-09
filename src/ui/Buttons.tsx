import type {
  ColorSchema,
  HorizontalPosition,
} from '@interfaces/ui.interfaces';
import clsx from 'clsx';
import type { ComponentProps, FC, ReactNode } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline' | 'ghost';
  colorSchema?: ColorSchema;
  iconPosition?: HorizontalPosition;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    variant = 'primary',
    colorSchema = 'default',
    iconPosition = 'right',
    icon,
    children,
    ...restProps
  } = props;

  return (
    <button
      className={clsx(
        'flex items-center justify-center space-x-2 overflow-hidden rounded-md py-1 text-base transition-colors',
        children ? 'px-4' : 'px-1',
        restProps.disabled && 'cursor-not-allowed',
        { border: variant !== 'ghost' },
        {
          primary: [
            'font-medium text-white shadow-next hover:bg-white',
            {
              default: 'border-black bg-black hover:text-black',
              success: 'border-green-700 bg-green-700 hover:text-green-700',
              warning: 'border-orange-400 bg-orange-400 hover:text-orange-400',
              danger: 'border-red-700 bg-red-700 hover:text-red-700',
            }[colorSchema],
          ],

          outline: {
            default: 'border-accent-1 text-accent-4 hover:border-black',
            success: 'border-green-400 text-green-700 hover:border-green-700',
            warning:
              'border-orange-200 text-orange-400 hover:border-orange-400',
            danger: 'border-red-400 text-red-700 hover:border-red-700',
          }[colorSchema],

          ghost: [
            'text-accent-3',
            !restProps.disabled &&
              {
                default: 'hover:text-black',
                success: 'hover:text-green-700',
                warning: 'hover:text-orange-400',
                danger: 'hover:text-red-700',
              }[colorSchema],
          ],
        }[variant],
        className
      )}
      {...restProps}
    >
      {icon && iconPosition === 'left' && icon}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
};
