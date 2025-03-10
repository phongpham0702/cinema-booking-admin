'use client';

import '@ant-design/v5-patch-for-react-19';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

const ThemeProvider = dynamic(
  () =>
    import('@/contexts/theme.context').then(modules => modules.ThemeProvider),
  {
    ssr: false, // Disable server-side rendering
  },
);

export default function MainLayout({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
