import { produce } from 'immer'
import { create } from 'zustand'

interface item {
  id: number
  text: string
}
interface nestedStore {
  list: {
    data: item[] | []
    status: { loading: boolean; loaded: boolean }
  }
  setList: (list: item[]) => void
}
const useNestedStore = create<nestedStore>((set) => ({
  list: {
    data: [],
    status: { loading: false, loaded: false },
  },
  /*   setList: (list) => {
    set((state) => ({ list: { ...state.list, data: list } }))
  }, */
  setList: (list) => {
    set((state) =>
      produce(state, (draftState) => {
        draftState.list.data = list
      })
    )
  },
}))

const selectList = (state: nestedStore) => state.list
const setList = (state: nestedStore) => state.setList

export { useNestedStore, selectList, setList }
