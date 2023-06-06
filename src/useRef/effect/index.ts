import { DependencyList, RefObject, useEffect } from 'react';

import { Effect, UseRefEffect } from './types';

export const useRefEffect: UseRefEffect = <T, A extends Array<T>>(
    effect: Effect<T | A>,
    ref: RefObject<T>[] | RefObject<T>,
    deps: DependencyList
) =>
    useEffect(() => {
        if (!Array.isArray(ref)) return ref.current ? effect(ref.current) : undefined;
        else if (ref.every((r) => r.current !== null)) return effect(ref.map((r) => r.current) as A);
    }, deps);
