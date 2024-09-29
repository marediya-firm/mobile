import React, {FC, memo, useMemo} from 'react';
import {CustomInput} from '../../../components/export';
import {CreateAccountInput, createAccountInput} from '../../../data/import';
import {UserInputProps} from './export';

export const UserInput: FC<UserInputProps> = memo(
  (props: UserInputProps) => {
    const {renderInput} = props;

    let input: CreateAccountInput[];
    if (renderInput) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
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
