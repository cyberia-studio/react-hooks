type KnownTypes = string | number | boolean | null | undefined;

export const stringify = <T>(deps: T): T extends ReadonlyArray<unknown> | Array<unknown> ? KnownTypes[] : KnownTypes => {
    type Result = T extends ReadonlyArray<unknown> | Array<unknown> ? KnownTypes[] : KnownTypes;

    const seen = new WeakSet();

    if (deps === null || typeof deps !== 'object') return deps as Result;

    if (Array.isArray(deps)) return JSON.stringify(deps.map(stringify)) as Result;

    return JSON.stringify(deps, (_, value) => {
        if (typeof value !== 'object' || value === null) return value;

        if (seen.has(value) || Object.keys(value).length >= 20) return '[Circular]';

        seen.add(value);

        return value;
    }) as Result;
};
