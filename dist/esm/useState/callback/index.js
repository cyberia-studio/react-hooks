import { useCallback, useEffect, useRef, useState } from 'react';
export const useCallbackState = (initialValue = undefined) => {
    const [state, setState] = useState(initialValue);
    const callbackRef = useRef(undefined);
    const set = useCallback((value, callback) => {
        setState(value);
        callbackRef.current = callback;
    }, []);
    useEffect(() => {
        if (!callbackRef.current)
            return;
        callbackRef.current(state);
        callbackRef.current = undefined;
    }, [state]);
    return [state, set];
};
