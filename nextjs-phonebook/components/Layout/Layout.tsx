import { FC } from 'react'

const Layout: FC = ({ children }) => (
  <div className="bg-slate-50 h-screen w-full flex justify-center align-middle items-center px-5 py-5 flex-col">
    {children}
  </div>
)

export default Layout
