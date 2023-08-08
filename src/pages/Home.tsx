import { useEffect } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import { select, useFlatStore, increase } from '../zustand/flatStore'
import { selectList, setList, useNestedStore } from '../zustand/nestedStore'

export default function Home() {
  const count = useFlatStore(select)
  const increaseCount = useFlatStore(increase)
  const nested = useNestedStore(selectList)
  const setNested = useNestedStore(setList)
  const fetchList = async () => {
    const data = await (() =>
      new Promise<
        {
          id: number
          text: string
        }[]
      >((reslove) => {
        setTimeout(() =>
          reslove([
            {
              id: 1,
              text: 'a',
            },
            {
              id: 2,
              text: 'b',
            },
          ])
        )
      }))()
    setNested(data)
  }
  const resetList = () => setNested([])
  useEffect(() => {
    console.log('status')
  }, [nested.status])
  useEffect(() => {
    console.log('list')
  }, [nested.data])
  return (
    <div className='p-4 bg-zinc-800 flex gap-4 flex-col items-center'>
      <Box>
        <div>{count}</div>
        <Button onClick={increaseCount}>increase</Button>
      </Box>
      <Box>
        {nested.data.map((i) => (
          <div key={i.id}>{i.text}</div>
        ))}
        <Button onClick={fetchList}>fetch</Button>
        <Button onClick={resetList}>reset</Button>
      </Box>
    </div>
  )
}
