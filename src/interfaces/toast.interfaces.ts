import type { ColorSchema } from '@interfaces/ui.interfaces';
import type { ReactNode } from 'react';

export interface ToastData {
  title: string;
  content?: ReactNode;
  duration?: number;
  colorSchema?: ColorSchema;
}
