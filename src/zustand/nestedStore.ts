import { produce } from 'immer'
import { create } from 'zustand'

interface item {
  id: number
  text: string
}
interface nestedStore {
  list: {
    data: item[] | []
    status: {
      fetching: { fetched: boolean; error: { isError: boolean } }
      loading: boolean
    }
  }
  setData: (list: item[]) => void
  setFetched: (fetched: boolean) => void
  setLoading: (loading: boolean) => void
  setError: (isError: boolean) => void
}
const list = {
  data: [],
  status: {
    fetching: {
      fetched: false,
      error: {
        isError: false,
      },
    },
    loading: false,
  },
}
const useNestedStore = create<nestedStore>((set) => ({
  list,
  /*   setList: (list) => {
    set((state) => ({ list: { ...state.list, data: list } }))
  }, */
  setData: (list) => {
    set((state) =>
      produce(state, (draftState) => {
        draftState.list.data = list
      })
    )
  },
  setFetched: (fetched) => {
    set(
      produce((draftState) => {
        draftState.list.status.fetching.fetched = fetched
      })
    )
  },
  setLoading: (loading) => {
    set(
      produce((draftState) => {
        draftState.list.status.loading = loading
      })
    )
  },
  setError: (isError) => {
    set(
      produce((draftState) => {
        draftState.list.status.fetching.error.isError = isError
      })
    )
  },
}))

const selectList = (state: nestedStore) => state.list
const setData = (state: nestedStore) => state.setData
const setFetched = (state: nestedStore) => state.setFetched
const setLoading = (state: nestedStore) => state.setLoading
const setError = (state: nestedStore) => state.setError

export { useNestedStore, selectList, setData, setFetched, setLoading, setError }
