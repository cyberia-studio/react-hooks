import { DependencyList, RefObject } from 'react';

type Callback = () => void;

interface UseOutside {
    <T extends HTMLElement>(ref: RefObject<T>, callback: Callback, deps?: DependencyList): void;
    <T extends HTMLElement>(refs: RefObject<T>[], callback: Callback, deps?: DependencyList): void;
}

export type { Callback, UseOutside };
