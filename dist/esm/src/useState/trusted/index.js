import { useState } from 'react';
export const useTrustedState = (initialValue = undefined, initialTrust = true) => {
    const [state, setState] = useState({ value: initialValue, isTrusted: initialTrust });
    const set = (value, isTrusted = true) => setState((prev) => ({
        value: value instanceof Function ? value(prev.value) : value,
        isTrusted,
    }));
    return [state.value, set, state.isTrusted];
};
