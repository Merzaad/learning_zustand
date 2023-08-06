import { create } from 'zustand'

interface store {
  count: number
  increase: (state: number) => void
}
const useStore = create<store>((set) => ({
  count: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}))

const selectCount = (state: store) => state.count
const increaseCount = (state: store) => state.increase
export { useStore, selectCount, increaseCount }
