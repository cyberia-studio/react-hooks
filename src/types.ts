type StateValue<T> = T | ((value: T) => T);
type Destructor = void | (() => void);

export type { Destructor, StateValue };
