import { StateValue } from '../../types';
export interface ISetPromiseValue<T> {
    (value: StateValue<T>): Promise<T>;
}
export interface UsePromiseState {
    <T>(initialValue: T): [T, ISetPromiseValue<T>];
    <T = undefined>(initialValue?: T | undefined): [T | undefined, ISetPromiseValue<T | undefined>];
}
export type Resolve<T> = ((value: T | PromiseLike<T> | undefined) => void) | undefined;
