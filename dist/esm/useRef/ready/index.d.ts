import { Callback, RefObject } from './types';
declare class CustomRef<T> implements RefObject<T> {
    current: T | null;
    private callback;
    constructor(value: T | null | undefined, callback: () => void);
    set(ref: T | null): void;
}
export declare const useRefReady: <T>(callback?: Callback<T> | undefined, deps?: never[]) => CustomRef<T>;
export {};
