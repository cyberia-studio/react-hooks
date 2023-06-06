import { useEffect, useMemo, useState } from 'react';
import React from 'react';

import { Callback, RefObject } from './types';

class CustomRef<T> implements RefObject<T> {
    public current: T | null;
    private callback: () => void;

    public constructor(value: T | null = null, callback: () => void) {
        this.current = value;
        this.callback = callback;

        this.set = this.set.bind(this);

        return this;
    }

    public set(ref: T | null) {
        if (ref === null || ref === undefined) return;

        this.current = ref;

        this.callback();
    }
}

export const useRefReady = <T>(callback?: Callback<T>, deps = []) => {
    const [isReady, setReady] = useState(false);
    const callbackRef = React.useRef<Callback<T> | null | undefined>(undefined);
    const localRef = useMemo(() => new CustomRef<T>(null, () => setReady(true)), []);

    useEffect(() => {
        if (callbackRef.current === null || !callback) return;

        callbackRef.current = callback;

        if (!isReady || localRef.current === null) return;

        const cb = callbackRef.current;
        callbackRef.current = null;

        return cb(localRef.current);
    }, [isReady, ...deps]);

    return localRef;
};
