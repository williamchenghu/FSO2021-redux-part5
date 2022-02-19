import { createSlice } from '@reduxjs/toolkit'

const initialState = { content: "", display: false }

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.content = `You voted '${action.payload}'`
      state.display = true
    },
    removeNotification(state, action) {
      state.content = ""
      state.display = false
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer