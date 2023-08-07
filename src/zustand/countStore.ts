import { create } from 'zustand'

interface countStore {
  count: number
  increase: () => void
}
const useCountStore = create<countStore>((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}))

const select = (state: countStore) => state.count
const increase = (state: countStore) => state.increase
export { useCountStore, select, increase }
