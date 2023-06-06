import { useEffect, useMemo, useState } from 'react';
import React from 'react';
class CustomRef {
    constructor(value = null, callback) {
        this.current = value;
        this.callback = callback;
        this.set = this.set.bind(this);
        return this;
    }
    set(ref) {
        if (ref === null || ref === undefined)
            return;
        this.current = ref;
        this.callback();
    }
}
export const useRefReady = (callback, deps = []) => {
    const [isReady, setReady] = useState(false);
    const callbackRef = React.useRef(undefined);
    const localRef = useMemo(() => new CustomRef(null, () => setReady(true)), []);
    useEffect(() => {
        if (callbackRef.current === null || !callback)
            return;
        callbackRef.current = callback;
        if (!isReady || localRef.current === null)
            return;
        const cb = callbackRef.current;
        callbackRef.current = null;
        return cb(localRef.current);
    }, [isReady, ...deps]);
    return localRef;
};
