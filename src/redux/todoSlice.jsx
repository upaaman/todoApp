import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        list: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.list.push({ ...action.payload });
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((e) => e.id !== action.payload);
        },
        checkTask: (state, action) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload) {
                    item.checked = !item.checked;
                }
                return item;
            });
        },
        editTask: (state, action) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload.id) {
                    item.value = action.payload.value;
                    item.checked=false
                }
                return item
            }

            )

        }
    },
});

export const { addTodo, deleteTodo, checkTask, editTask } = todoSlice.actions;
export default todoSlice.reducer;
