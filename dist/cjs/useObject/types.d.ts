import { DependencyList } from 'react';
type Effect = () => void | (() => void);
type Hook = (effect: Effect, deps: DependencyList) => void;
export type { Effect, Hook };
