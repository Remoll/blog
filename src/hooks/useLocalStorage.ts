import { useState, useEffect } from "react";

const getLocalStorageValue = <T>(localStorageKey: string, initialValue: T) => {
  const item = window.localStorage.getItem(localStorageKey);
  return item ? JSON.parse(item) : initialValue;
};

const useLocalStorage = <T>(localStorageKey: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(
    getLocalStorageValue(localStorageKey, initialValue)
  );

  useEffect(() => {
    window.localStorage.setItem(localStorageKey, JSON.stringify(storedValue));
  }, [localStorageKey, storedValue]);

  return [storedValue, setStoredValue] as const;
};

export default useLocalStorage;
