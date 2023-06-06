import { StateValue } from '../../types';
export interface ISet<T> {
    (value: StateValue<T>, isTrusted?: boolean): Promise<T>;
}
export interface UseState {
    <T>(initialValue: T, initialTrust?: boolean): [T, ISet<T>, boolean];
    <T = undefined>(initialValue?: T | undefined, initialTrust?: boolean): [T | undefined, ISet<T | undefined>, boolean];
}
export type Resolve<T> = ((value: T | PromiseLike<T> | undefined) => void) | undefined;
