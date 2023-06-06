import { useEffect } from 'react';
import { stringify } from './deps';
export const useObjectEffect = (effect, deps) => useEffect(effect, stringify(deps));
