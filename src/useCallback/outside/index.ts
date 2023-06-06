import { DependencyList, RefObject } from 'react';

import { useEvents } from '../events';
import { Callback, UseOutside } from './types';

const contains = (el: Element | undefined | null, target: Node) => (el ? el.contains(target) : false);

export const useOutside: UseOutside = <T extends Element>(
    ref: RefObject<T> | RefObject<T>[],
    callback: Callback,
    deps?: DependencyList
): void => {
    useEvents(
        'click',
        (event) => {
            const target = event.target as Node;

            if (!Array.isArray(ref)) !contains(ref.current, target) && callback();
            else ref.every((r) => !contains(r.current, target)) && callback();
        },
        document,
        deps
    );
};
