import Box from '../components/Box'
import Button from '../components/Button'
import { select, useCountStore, increase } from '../zustand/countStore'

export default function Home() {
  const count = useCountStore(select)
  const increaseCount = useCountStore(increase)
  return (
    <div className='p-4 bg-zinc-800 flex gap-4 flex-col items-center'>
      <Box>
        <div>{count}</div>
        <Button onClick={increaseCount}>increase</Button>
      </Box>
    </div>
  )
}
