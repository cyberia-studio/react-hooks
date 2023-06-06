import { useState } from 'react';

import { ISetTrustedValue, TrustedValue, UseTrustedState } from './types';

export const useTrustedState: UseTrustedState = (initialValue = undefined, initialTrust = true) => {
    type S = typeof initialValue;

    const [state, setState] = useState<TrustedValue<S>>({ value: initialValue, isTrusted: initialTrust });

    const set: ISetTrustedValue<S> = (value, isTrusted = true) =>
        setState((prev) => ({
            value: value instanceof Function ? value(prev.value) : value,
            isTrusted,
        }));

    return [state.value, set, state.isTrusted];
};
