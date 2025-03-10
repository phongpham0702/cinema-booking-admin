'use client';

import ThemeButton from '../ThemeButton/ThemeButton';

export default function Header() {
  console.log('header render');

  return (
    <header className="h-20 w-full bg-transparent px-4">
      <div className="flex size-full flex-row items-center justify-end">
        <ThemeButton />
      </div>
    </header>
  );
}
