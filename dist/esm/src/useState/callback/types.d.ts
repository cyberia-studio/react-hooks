import { StateValue } from '@/types';
export type Callback<T> = (state: T) => void;
export interface ISetCallbackValue<T> {
    (value: StateValue<T>, callback?: Callback<T>): void;
}
export interface UseCallbackState {
    <T>(initialValue: T): [T, ISetCallbackValue<T>];
    <T = undefined>(initialValue?: T | undefined): [T | undefined, ISetCallbackValue<T | undefined>];
}
