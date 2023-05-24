import { configureStore } from "@reduxjs/toolkit"
import UserSlice from './reducers/UsersReduduser'


export const store = configureStore({
  reducer: {
    user: UserSlice
  }
})