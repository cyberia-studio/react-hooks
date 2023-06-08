import { DependencyList, useMemo } from 'react';

import { stringify } from './deps';

export const useObjectMemo = <T>(factory: () => T, deps: DependencyList | undefined) =>
    useMemo(factory, deps ? [stringify(deps)] : undefined);
