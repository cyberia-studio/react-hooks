import { DependencyList, useCallback } from 'react';

import { stringify } from './deps';

export const useObjectCallback = <T extends Function>(effect: T, deps: DependencyList): T => useCallback(effect, stringify(deps));
