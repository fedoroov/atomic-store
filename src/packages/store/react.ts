import { useEffect, useState } from "react";
import { Atom } from "./atom";

export const useAtom = <T>(atom: Atom<T>) => {
  const [state, setState] = useState<T>(atom.get());

  useEffect(() => {
    const updateCb = (value: T) => setState(value);

    atom.subscribe(updateCb);

    return () => {
      atom.unsubscribe(updateCb);
    };
  }, []);

  return state;
};
