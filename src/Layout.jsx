import NavHeader from "./components/NavHeader"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className='flex flex-col gap-4'>
      <NavHeader />
      <Outlet />
    </div>
  )
}

export default Layout
