import { createSlice } from '@reduxjs/toolkit'

const initialState = { content: "", display: false }

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotification(state, action) {
      state.content = action.payload
      state.display = true

    },
    removeNotification(state, action) {
      state.content = ""
      state.display = false
    }
  }
})

export const setNotification = (content, timeout) => {
  return async dispatch => {
    dispatch(showNotification(content))
    await setTimeout(() => dispatch(removeNotification()), timeout * 1000)
  }
}

export const { showNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer