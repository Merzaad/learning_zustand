import { create } from 'zustand'

interface flatStore {
  count: number
  increase: () => void
}
const useFlatStore = create<flatStore>((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}))

const select = (state: flatStore) => state.count
const increase = (state: flatStore) => state.increase
export { useFlatStore, select, increase }
