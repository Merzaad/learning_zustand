interface props {
  children: React.ReactNode
}
export default function Box({ children }: props) {
  return (
    <div className='p-4 border-indigo-900 border rounded-lg flex items-center justify-center flex-col gap-4'>
      {children}
    </div>
  )
}
