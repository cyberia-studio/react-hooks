import { StateValue } from '../../types';
export interface TrustedValue<T> {
    value: T;
    isTrusted: boolean;
}
export interface ISetTrustedValue<T> {
    (value: StateValue<T>, isTrusted?: boolean): void;
}
export interface UseTrustedState {
    <T>(initialValue: T, initialTrust?: boolean): [T, ISetTrustedValue<T>, boolean];
    <T = undefined>(initialValue?: T, initialTrust?: boolean): [T | undefined, ISetTrustedValue<T | undefined>, boolean];
}
