import { Destructor } from '@/types';

type Callback<T> = (ref: T) => Destructor;
interface ISetRef<T> {
    (ref: T): void;
}
interface RefObject<T> {
    current: T | null;
    set: ISetRef<T | null>;
}

export type { Callback, ISetRef, RefObject };
