import { MouseEventHandler } from 'react'

interface props {
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
export default function Button({ onClick, children }: props) {
  return (
    <button className='p-1 bg-indigo-900 rounded-sm hover:bg-indigo-700' onClick={onClick}>
      {children}
    </button>
  )
}
