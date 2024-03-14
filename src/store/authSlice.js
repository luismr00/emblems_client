import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        showProfileNav: 'd-none',
        showLRNav: "navbar-nav"
        // someString: "Hey from redux"
    },
    reducers: {
      login: (state) => {
        state.isLoggedIn = true
        // renderProfileNavs();
      },
      logout: (state) => {
          state.isLoggedIn = false
        //   renderProfileNavs();
        //   console.log("Logged out. Current state: " + state.isLoggedIn);
      },
      renderProfileNavs: (state) => {
        if(state.isLoggedIn) {
            state.showLRNav = 'd-none'
            state.showProfileNav = 'd-block'
        } else {
            state.showLRNav = 'navbar-nav'
            state.showProfileNav = 'd-none'
        }
      }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, renderProfileNavs } = authSlice.actions

export default authSlice.reducer