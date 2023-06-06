import { useCallback, useEffect, useRef, useState } from 'react';

import { ISetPromiseValue, Resolve, UsePromiseState } from './types';

export const usePromiseState: UsePromiseState = (initialValue = undefined) => {
    type S = typeof initialValue;

    const [state, setState] = useState(initialValue);
    const resolveRef = useRef<Resolve<S>>(undefined);

    const set: ISetPromiseValue<S> = useCallback((value) => {
        setState(value);

        return new Promise<S>((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);

    useEffect(() => {
        if (!resolveRef.current) return;

        resolveRef.current(state);
        resolveRef.current = undefined;
    }, [state]);

    return [state, set];
};
