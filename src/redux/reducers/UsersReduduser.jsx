import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  users: [
    {
      name: 'Beks',
      text: 'hello',
      id: 1
    },
    {
      name: 'Beks',
      text: 'hello',
      id: 2
    },
    {
      name: 'Beks',
      text: 'hello',
      id: 3
    }
  ]
}

const UserSlice = createSlice({
  name: 'Hun',
  initialState,
  reducers: {
    AddUsers: (state, action) => {
      state.users = [ action.payload, ...state.users]
    },
    deleteUser(state, action) {
      state.users = state.users.filter((id) => id.id !== action.payload)
    },
    updateUser(state, action) {
      state.users = state.users
      .map(item => item.id === action.payload.id ? action.payload : item)
    }
  }
})

export default UserSlice.reducer
export const { AddUsers, deleteUser, updateUser } = UserSlice.actions