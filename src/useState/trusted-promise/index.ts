import { useCallback, useEffect, useRef, useState } from 'react';

import { TrustedValue } from '../trusted/types';
import { ISet, Resolve, UseState } from './types';

export const useTrustedPromise: UseState = (initialValue = undefined, initialTrust = true) => {
    type S = typeof initialValue;

    const [state, setState] = useState<TrustedValue<S>>({ value: initialValue, isTrusted: initialTrust });
    const resolveRef = useRef<Resolve<S>>(undefined);

    const set: ISet<S> = useCallback((value, isTrusted = true) => {
        setState((prev) => ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted,
        }));

        return new Promise<S>((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);

    useEffect(() => {
        if (!resolveRef.current) return;

        resolveRef.current(state.value);
        resolveRef.current = undefined;
    }, [state]);

    return [state.value, set, state.isTrusted];
};
