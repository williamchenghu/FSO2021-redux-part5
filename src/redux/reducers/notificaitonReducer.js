import { createSlice } from '@reduxjs/toolkit'

const initialState = { content: "", display: false, removal: "" }

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
    },
    timeoutID(state, action) {
      state.removal = action.payload
    }
  }
})

export const setNotification = (content, timeout, removalID) => {
  return dispatch => {
    clearTimeout(removalID)
    dispatch(showNotification(content))
    const previousRemoval = setTimeout(() => dispatch(removeNotification()), timeout * 1000)
    dispatch(timeoutID(previousRemoval))
  }
}

export const { showNotification, removeNotification, timeoutID } = notificationSlice.actions
export default notificationSlice.reducer