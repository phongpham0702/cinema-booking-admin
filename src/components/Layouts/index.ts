import dynamic from 'next/dynamic';

export { default as MainLayout } from './MainLayout';
export const AuthLayout = dynamic(() => import('./AuthLayout'));
