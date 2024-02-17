type AnyFunction = (...args: any[]) => any;

type KeysOfType<T, S> = {
  [key in keyof T]: S extends T[key] ? key : never;
}[keyof T];

type UndefinedToOptional<T> = Omit<T, KeysOfType<T, undefined>> &
  Partial<Pick<T, KeysOfType<T, undefined>>>;

export type Fields<T> = UndefinedToOptional<
  Omit<T, KeysOfType<T, AnyFunction>>
>;
