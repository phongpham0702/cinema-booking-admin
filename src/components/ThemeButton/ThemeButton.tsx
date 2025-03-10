'use client';

import { useTheme } from '@/contexts/theme.context';
import { Button } from 'antd';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  console.log('button render');
  return (
    <Button
      shape="circle"
      className="size-10 bg-transparent"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </Button>
  );
}
