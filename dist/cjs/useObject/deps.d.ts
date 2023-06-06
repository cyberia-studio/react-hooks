type KnownTypes = string | number | boolean | null | undefined;
export declare const stringify: <T>(deps: T) => T extends readonly unknown[] | unknown[] ? KnownTypes[] : KnownTypes;
export {};
