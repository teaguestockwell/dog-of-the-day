import {TabBar} from './TabBar'

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <TabBar />
      <div style={{height: 80}} />
      <main>{children}</main>
    </>
  )
}
