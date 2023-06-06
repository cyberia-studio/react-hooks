import { DependencyList, useEffect, useRef } from 'react';

import { EventCallback, UseEvents } from './types';

export const useEvents: UseEvents = <T extends HTMLElement>(
    type: string,
    callback: EventCallback<object>,
    element?: T,
    deps?: DependencyList
) => {
    const handler = useRef(callback);

    useEffect(() => {
        if (!element) return;

        element.addEventListener(type, handler.current);

        return () => {
            return element.removeEventListener(type, handler.current);
        };
    }, deps);
};
