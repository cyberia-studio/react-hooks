import { useCallback, useEffect, useRef, useState } from 'react';

import { Callback, ISetCallbackValue, UseCallbackState } from './types';

export const useCallbackState: UseCallbackState = (initialValue = undefined) => {
    type S = typeof initialValue;

    const [state, setState] = useState(initialValue);
    const callbackRef = useRef<Callback<S> | undefined>(undefined);

    const set: ISetCallbackValue<S> = useCallback((value, callback) => {
        setState(value);

        callbackRef.current = callback;
    }, []);

    useEffect(() => {
        if (!callbackRef.current) return;

        callbackRef.current(state);
        callbackRef.current = undefined;
    }, [state]);

    return [state, set];
};
