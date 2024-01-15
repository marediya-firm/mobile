import {CreateAccountInput} from '../../data/import';

export interface CustomInputProps extends CreateAccountInput {
  index: number;
}

export interface Load {
  size?: number;
  color?: string;
}
