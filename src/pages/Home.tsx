import { selectCount, useStore, increaseCount } from '../zustand/store'

export default function Home() {
  const count = useStore(selectCount)
  const increase = useStore(increaseCount)
  return (
    <div className='p-4 flex gap-4 justify-center'>
      <div>{count}</div>
      <button className='border' onClick={increase}>
        +
      </button>
    </div>
  )
}
