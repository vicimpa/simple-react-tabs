import { ReactiveSet } from "library/ReactiveSet";
import { useLayoutEffect, useMemo } from "react";

import { useRerender } from "./useRerender";

export const useReactiveSet = <T>(initial?: Iterable<T>) => {
  const rerender = useRerender();
  const memoSet = useMemo(() => new ReactiveSet<T>(initial), []);

  useLayoutEffect(() => {
    return memoSet.subscribe(rerender);
  }, []);

  return memoSet;
};