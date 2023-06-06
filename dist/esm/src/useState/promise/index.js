import { useCallback, useEffect, useRef, useState } from 'react';
export const usePromiseState = (initialValue = undefined) => {
    const [state, setState] = useState(initialValue);
    const resolveRef = useRef(undefined);
    const set = useCallback((value) => {
        setState(value);
        return new Promise((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);
    useEffect(() => {
        if (!resolveRef.current)
            return;
        resolveRef.current(state);
        resolveRef.current = undefined;
    }, [state]);
    return [state, set];
};
