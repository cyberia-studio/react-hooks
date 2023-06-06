import { useCallback, useEffect, useRef, useState } from 'react';
export const useTrustedPromise = (initialValue = undefined, initialTrust = true) => {
    const [state, setState] = useState({ value: initialValue, isTrusted: initialTrust });
    const resolveRef = useRef(undefined);
    const set = useCallback((value, isTrusted = true) => {
        setState((prev) => ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted,
        }));
        return new Promise((resolve) => {
            resolveRef.current = resolve;
        });
    }, []);
    useEffect(() => {
        if (!resolveRef.current)
            return;
        resolveRef.current(state.value);
        resolveRef.current = undefined;
    }, [state]);
    return [state.value, set, state.isTrusted];
};
