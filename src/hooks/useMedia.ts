import { useState, useEffect } from "react";

export const useMedia = (
  query: string,
  defaultState: boolean = false
): boolean => {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    let mql = window.matchMedia(query);
    const onChange = () => setState(mql.matches);
    mql.addEventListener("change", onChange);

    setState(mql.matches);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return state;
};
