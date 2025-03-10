import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

export default function useLocalStorageState<T>(
  key: string,
  initialValue: T | (() => T),
): [T, Dispatch<SetStateAction<T>>] {
  const getStoredValue = () => {
    const stored = localStorage.getItem(key);

    if (stored !== null) return JSON.parse(stored)['data'];

    return typeof initialValue === 'function'
      ? (initialValue as () => T)()
      : initialValue;
  };

  const [value, setValue] = useState<T>(getStoredValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify({ data: value }));
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [value, key]);

  return [value, setValue];
}
