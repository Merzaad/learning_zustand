import { Outlet, NavLink } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='grid min-h-screen p-4 grid-rows-[50px,auto]'>
      <div className='flex justify-center p-4 gap-2'>
        <NavLink to='/'>home</NavLink>
        <NavLink to='/page1'>page1</NavLink>
        <NavLink to='/page2'>page2</NavLink>
      </div>
      <div className='h-50 bg-zinc-900 rounded-lg p-4 grid'>
        <Outlet />
      </div>
    </div>
  )
}
