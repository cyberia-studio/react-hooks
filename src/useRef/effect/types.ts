import { DependencyList, RefObject } from 'react';

import { Destructor } from '@/types';

type Effect<T> = (element: T) => Destructor;

interface UseRefEffect {
    <T>(effect: (element: T) => Destructor, ref: RefObject<T>, deps: DependencyList): void;
    <T, A extends Array<T>>(effect: (elements: A) => Destructor, ref: RefObject<T>[], deps: DependencyList): void;
}

export type { Effect, UseRefEffect };
