import React, {FC, memo, useMemo} from 'react';
import {CustomInput} from '../../../components/export';
import {CreateAccountInput, createAccountInput} from '../../../data/import';
import {UserInputProps} from './export';

export const UserInput: FC<UserInputProps> = memo(
  (props: UserInputProps) => {
    const {renderInput} = props;

    let input: Array<CreateAccountInput>;
    if (renderInput) {
      input = useMemo<Array<CreateAccountInput>>(
        () => createAccountInput.filter((_, index) => renderInput?.[index]),
        [],
      );
    } else input = createAccountInput;

    return (
      <React.Fragment>
        {input.map(value => {
          return <CustomInput key={value.header} {...value} />;
        })}
      </React.Fragment>
    );
  },
  (): boolean => false,
);
