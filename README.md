# React Hooks

## Usage

```typescript
import {
    useCallbackState,
    useEvents,
    useObjectCallback,
    useObjectEffect,
    useObjectMemo,
    useOutside,
    useParams,
    usePromiseState,
    useTrustedPromise,
    useTrustedState,
} from '@fipnooone/hooks';
```

## useState

### useTrustedState

```typescript
const [state, setState, isTrusted] = useTrustedState('defaultValue', true);
const [state, setState, isTrusted] = useTrustedState();
```

### useCallbackState

```typescript
const [state, setState] = useCallbackState('defaultValue');

const changeCallback = (value: string) => console.log(value);

const changeState = () => setState('newValue', changeCallback);
```

### usePromiseState

```typescript
const [state, setState] = usePromiseState<User>();

const changeState = () =>
    setState({ username: 'fipnooone', website: 'https://fipnoo.one' }).then((value) => {
        console.log(value);
    });
```

### useTrustedPromise

```typescript
const [state, setState] = useTrustedPromise<number>();

const changeState = () => setState(undefined).then();
```

## useParams

```typescript
const { id, station_slug } = useParams({ id: 'int', station_slug: 'string' });
// id: number
// station_slug: string

// redirect is true by refault
useParams({ }, redirect: boolean | '/url/to/a-page');

const { id, station_slug } = useParams({ id: 'int', station_slug: 'string' }, false);
// id: number | undefined
// station_slug: string | undefined
```

## useObject

### useObjectEffect / useObjectCallback / useObjectMemo

```typescript
const [users, setUsers] = useState<User[]>([]);

useObjectEffect(() => {
    // ...
}, [users]);
```

## useCallback

### useOutside

```typescript
useOutside(myRef, () => close(), [dep]);
```

### useEvents

```typescript
useEvents(
    'click',
    (event) => {
        while (true) {
            console.log('clicked');
        }
    },
    [dep0, dep1],
    document
);
```

## useRef

### useRefEffect

```typescript
useRefEffect((T) => {}, ref<T>, [dep]);
```

### useEvents

```typescript
useRefReady((T) => {}, ref<T>);
```
