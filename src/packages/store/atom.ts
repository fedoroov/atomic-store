export type Atom<T> = {
  get: () => T;
  set: (value: ((v: T) => T) | T) => void;
  subscribe: (value: (v: T) => void) => void;
  unsubscribe: (value: (v: T) => void) => void;
  onMount: (value: () => void) => void;
  reset: () => void;
};

export const atom = <T>(value: T): Atom<T> => {
  let isMounted = false;
  let state = value;
  let callbacks: ((value: T) => void)[] = [];

  const get = () => state;

  const subscribe = (value: (v: T) => void) => {
    callbacks.push(value);
  };

  const unsubscribe = (value: (v: T) => void) => {
    callbacks = callbacks.filter((cb) => cb !== value);
  };

  const set = (value: ((v: T) => T) | T) => {
    if (typeof value === "function") {
      state = (value as (v: T) => T)(state);
    } else {
      state = value;
    }

    callbacks.forEach((cb) => cb(state));
  };

  const onMount = (cb: () => void) => {
    if (!isMounted) {
      cb();
      isMounted = true;
    }
  };

  const reset = () => {
    set(value);
  };

  return { get, set, subscribe, unsubscribe, onMount, reset };
};

export const computed = <T, U>(sourceAtom: Atom<T>, fn: (value: T) => U) => {
  const computedAtom = atom(fn(sourceAtom.get()));

  sourceAtom.subscribe((value) => computedAtom.set(fn(value)));

  return computedAtom;
};

export const withLocalStorage = <T>(key: string, sourceAtom: Atom<T>) => {
  const localStorageValue = localStorage.getItem(key);

  if (localStorageValue) {
    sourceAtom.set(JSON.parse(localStorageValue));
  } else {
    localStorage.setItem(key, JSON.stringify(sourceAtom.get()));
  }

  sourceAtom.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return sourceAtom;
};

export const log = <T>(atom: Atom<T>, cb: (value: T) => void) => {
  atom.subscribe(cb);
};
