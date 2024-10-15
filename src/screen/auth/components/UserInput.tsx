import React, { FC, memo, useMemo } from 'react';
import { CustomInput } from '../../../components/export';
import {
  createAccountInput,
  type CreateAccountInput,
} from '../../../data/import';
import { UserInputProps } from './export';

export const UserInput: FC<UserInputProps> = memo(
  (props: UserInputProps) => {
    const { renderInput } = props;

    let input: CreateAccountInput[];
    if (renderInput) {
      input = useMemo<CreateAccountInput[]>(
        () => createAccountInput.filter((_, index) => renderInput?.[index]),
        [renderInput],
      );
    } else {
      input = createAccountInput;
    }

    return (
      <React.Fragment>
        {input.map((value, index: number) => {
          return <CustomInput key={value.header} {...value} index={index} />;
        })}
      </React.Fragment>
    );
  },
  (): boolean => false,
);

UserInput.displayName = 'UserInput';
