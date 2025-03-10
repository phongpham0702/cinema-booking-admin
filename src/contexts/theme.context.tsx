'use client';

import { useLocalStorageState } from '@/hooks';
import type { ReactNode } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const getBrowserTheme = useCallback(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }, []);

  const [theme, setTheme] = useLocalStorageState<Theme>(
    'theme',
    getBrowserTheme,
  );

  const contextValue: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme: (theme: Theme) => setTheme(theme),
    }),
    [theme, setTheme],
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
