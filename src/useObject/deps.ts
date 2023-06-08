type KnownTypes = string | number | boolean | null | undefined;

export const stringify = <T>(deps: T): KnownTypes => {

    const seen = new WeakSet();

    if (deps === null || typeof deps !== 'object') return deps as KnownTypes;

    if (Array.isArray(deps)) return JSON.stringify(deps.map(stringify));

    return JSON.stringify(deps, (_, value) => {
        if (typeof value !== 'object' || value === null) return value;

        if (seen.has(value) || Object.keys(value).length >= 20) return '[Circular]';

        seen.add(value);

        return value;
    });
};
