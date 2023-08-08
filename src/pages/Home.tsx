import { useEffect } from 'react'
import Box from '../components/Box'
import Button from '../components/Button'
import { select, useFlatStore, increase } from '../zustand/flatStore'
import {
  selectList,
  setData,
  setFetched,
  useNestedStore,
  setLoading,
  setError,
} from '../zustand/nestedStore'

export default function Home() {
  const count = useFlatStore(select)
  const increaseCount = useFlatStore(increase)
  const nested = useNestedStore(selectList)
  const setNested = useNestedStore(setData)
  const setNestedFetched = useNestedStore(setFetched)
  const setNestedLoading = useNestedStore(setLoading)
  const setNestedError = useNestedStore(setError)

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
  useEffect(() => {
    console.log('fetched')
  }, [nested.status.fetching.fetched])
  useEffect(() => {
    console.log('error')
  }, [nested.status.fetching.error])
  useEffect(() => {
    console.log('loading')
  }, [nested.status.loading])
  useEffect(() => {
    console.log('data')
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
        <Button onClick={() => setNestedFetched(true)}>set fetched</Button>
        <Button onClick={() => setNestedLoading(true)}>set loading</Button>
        <Button onClick={() => setNestedError(true)}>set error</Button>
      </Box>
    </div>
  )
}
