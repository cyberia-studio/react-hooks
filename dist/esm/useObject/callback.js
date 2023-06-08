import { useCallback } from 'react';
import { stringify } from './deps';
export const useObjectCallback = (effect, deps) => useCallback(effect, [stringify(deps)]);
