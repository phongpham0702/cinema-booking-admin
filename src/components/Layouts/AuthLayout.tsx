'use client';

import { Header, SideBar } from '@/components';
import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full flex-row">
      <SideBar />

      <main className="block min-h-full flex-1">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}
