import type { Metadata } from 'next';

export default function Test() {
  return <div className="flex w-full">test content</div>;
}

export const metadata: Metadata = {
  title: 'Test',
  openGraph: {
    title: 'Test',
    description: 'Test',
  },
  description: 'Test',
};
