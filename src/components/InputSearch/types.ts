import { ChangeEventHandler } from 'react';

export interface IInputSearchProp {
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}
