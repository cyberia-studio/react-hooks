import { useEffect } from 'react';

import { stringify } from './deps';
import { Hook } from './types';

export const useObjectEffect: Hook = (effect, deps) => useEffect(effect, stringify(deps));
