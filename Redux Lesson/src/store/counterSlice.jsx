import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.value = state.value + 1;
        },
        increaseByAmount: (state, action) => {
            state.value = state.value + action.payload.amount;
        },
        decrease: (state) => {
            state.value = state.value - 1;
        },
        decreaseByAmount: (state, action) => {
            state.value = state.value - action.payload.amount;
        }
    }
})

export const { increase,increaseByAmount , decrease,decreaseByAmount } = counterSlice.actions;