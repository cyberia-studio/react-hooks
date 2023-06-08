import { useMemo } from 'react';
import { stringify } from './deps';
export const useObjectMemo = (factory, deps) => useMemo(factory, deps ? [stringify(deps)] : undefined);
