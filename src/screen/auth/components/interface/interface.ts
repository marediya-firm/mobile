export type LoginInput<T extends string | number | symbol, S> = {
  [key in T]: S;
};

export const loginInput: LoginInput<string, number> = {
  '1': 1,
  '2': 2,
};

export interface UserInputProps {
  renderInput?: LoginInput<string, number>;
}
