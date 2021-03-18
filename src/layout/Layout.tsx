import { TabBar } from './TabBar';

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <TabBar/>
      <main>{children}</main>
    </>
  );
}