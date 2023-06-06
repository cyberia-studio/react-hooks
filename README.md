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
    usePromiseState,
    useRefEffect,
    useRefReady,
    useTrustedPromise,
    useTrustedState,
} from '@cyberia-studio/react-hooks';
```

## useState

### useTrustedState

```typescript
const [state, setState, isTrusted] = useTrustedState('defaultValue', isTrustedDefault);
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

const changeState = () =>
    setState(undefined).then(() => {
        // ...
    });
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
        if (!isOpen) // ...
    },
    document,
    [isOpen]
);
```

## useRef

### useRefEffect

```typescript
useRefEffect((T) => {}, ref<T>, [dep]);
```

### useEvents

```typescript
const myRef = useRefReady((T) => {}, ref<T>);

return <div ref={myRef.set}></div>;
```
