import { createSlice } from '@reduxjs/toolkit'

const initialState = ["initial notification"]

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {}
})

export default notificationSlice.reducer