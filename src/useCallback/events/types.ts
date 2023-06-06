import { DependencyList } from 'react';

type EventCallback<T> = (event: T) => void;

interface UseEvents {
    <T extends keyof HTMLElementEventMap>(
        type: T,
        callback: EventCallback<HTMLElementEventMap[T]>,
        element?: HTMLElement | null,
        deps?: DependencyList
    ): void;
    <T extends keyof WindowEventMap>(
        type: T,
        callback: EventCallback<WindowEventMap[T]>,
        element?: Window | null,
        deps?: DependencyList
    ): void;
    <T extends keyof DocumentEventMap>(
        type: T,
        callback: EventCallback<DocumentEventMap[T]>,
        element?: Document | null,
        deps?: DependencyList
    ): void;
    <E extends Event, T extends string>(
        type: T,
        callback: EventCallback<E>,
        element?: Element | Document | Window | HTMLElement | null,
        deps?: DependencyList
    ): void;
}

export type { EventCallback, UseEvents };
